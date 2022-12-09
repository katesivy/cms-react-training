import React, { useContext, useState } from "react";
import Image from "next/image";
import Detail from "./Detail";
import styles from '../styles/Comic.module.css'
import Button from "./Button";
import {AppContext, useAppState} from "../state/PageWrapper"
import { useToggleFavorites } from "../hooks/useToggleFavorites";

type Thumbnail = {
  path: string,
  extension: string,
  id? : number
}

type Dates = {
  date: string;
}[]

type Props = {
  comic: {
    id: number; 
    title: string | undefined;
    issueNumber: number; 
    creators: string[] | undefined; 
    thumbnail: Thumbnail; 
    characters: {};
    dates?: Dates | undefined;
    newDate: string;
    isFavorite: boolean,
    // id: string,
    // issueNumber: number,
    // creators: string[] | undefined,
    // thumbnail: Thumbnail
  }
  title: string,
  newDate: string,
  isFavorite: boolean,
  // setIsFavorite: () => void,
  // toggleFavorite: () => void
}

type LoaderProps = {
  src: string,
  width: number | string,
  quality?: number | string | undefined, 
  alt?: number,
  // loader?: {}
}

export default function Comic ({comic, title, newDate}: Props) {
  const myLoader = ({ src, width, quality }: LoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const {isFavorite, setIsFavorite, toggleFavorite, comicStatus, favArray}  = useContext(AppContext);
  console.log('Comic List')
  // console.log( comic.title, comic.isFavorite)

  const path: string = comic.thumbnail.path + '.'
  const extenstion: string = comic.thumbnail.extension 
  const imgSrc: string = path + extenstion
  const image: any =
      <Image className={styles.image}
        loader={myLoader}
        src={imgSrc}
        alt={comic.id} 
        width={200}
        height={300}
      />

      if (comic.isFavorite  == true) {
        favArray.push(comic.title)
    } 
    console.log('favArray', favArray)

  return (
    <div className={styles.comicDiv}>
        <ul className={styles.ul}>
        {image}
          <Detail comic={comic} title={title} newDate={newDate}/>
          <Button comic={comic} />
        </ul>
    </div>
  )
}

//  isFavorite={isFavorite} setIsFavorite={setIsFavorite} toggleFavorite={toggleFavorite}