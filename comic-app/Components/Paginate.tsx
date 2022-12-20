import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import ReactPaginate from 'react-paginate';
    import Router, { withRouter } from 'next/router'
    import useFetch from '../hooks/useFetchComics';

    
    
    const Paginate = () => {
        const { comics } = useFetch();
        const [isLoading, setLoading] = useState(false); //State for the loading indicator
        const startLoading = () => setLoading(true);
        const stopLoading = () => setLoading(false);
    
    		/*
    			Posts fetching happens after page navigation, 
    			so we need to switch Loading state on Router events.
    		*/
        useEffect(() => { //After the component is mounted set router event handlers
            Router.events.on('routeChangeStart', startLoading); 
            Router.events.on('routeChangeComplete', stopLoading);
    
            return () => {
                Router.events.off('routeChangeStart', startLoading);
                Router.events.off('routeChangeComplete', stopLoading);
            }
        }, [])
    
    		//When new page selected in paggination, we take current path and query parrams.
    		// Then add or modify page parram and then navigate to the new route.
        const paginationHandler = (page) => {
            const currentPath = comics.router.pathname;
            const currentQuery = comics.router.query;
            currentQuery.page = page.selected + 1;
    
            comics.router.push({
                pathname: currentPath,
                query: currentQuery,
            });
    
        };
    		
    		//Conditional rendering of the posts list or loading indicator
        let content = null;
        if (isLoading)
            content = <div>Loading...</div>;
        else {
    				//Generating posts list
            content = (
                <ul>
                    {comics.map(comic => {
                        return <li key={comic.id}>{comic.title}</li>;
                    })}
                </ul>
            );
        }
    
        return (
            <div className="container">
                <h1>Posts List with Pagination in Next.js</h1>
                <div className="posts">
                    {content}
                </div>
    
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    activeClassName={'active'}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    initialPage={comics.currentPage - 1}
                    pageCount={comics.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={paginationHandler}
                />
            </div>
        );
    };
    
    //Fetching posts in get Intial Props to make the app seo friendly
    Paginate.getInitialProps = async ({ query }: any) => {
        const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
        const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
        var crypto = require('crypto');
        const baseUrl: string = 'http://gateway.marvel.com/v1/public/comics?';
        // const query = `?limit=${req.query.limit}&nameStartsWith=${req.query.name}`;
        const timestamp: number = new Date().getTime();
        const auth: string = `${timestamp}${privateKey}${publicKey}`; 
        var hash: string = crypto.createHash('md5').update(auth).digest('hex');
        const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        const page = query.page || 1; //if page empty we request the first page
        const posts = await axios.get(`{baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}&page=${page}`);
        return {
            totalCount: posts.data._meta.totalCount,
            pageCount: posts.data._meta.pageCount,
            currentPage: posts.data._meta.currentPage,
            perPage: posts.data._meta.perPage,
            posts: posts.data.result,
        };
    }
    
    
    export default withRouter(Paginate);