import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Detail from "./Detail";
import styles from '../styles/Comic.module.css'
import Button from "./Button";
import { AppContext } from "../state/PageWrapper"

type Thumbnail = {
  path: string,
  extension: string,
  id? : number | undefined
}

// type Dates = {
//   date: string;
// }[]

type Props = {
  comic: {
    id: string; 
    title: string | undefined;
    issueNumber: number; 
    creators: string[] | undefined; 
    thumbnail: Thumbnail; 
    characters: {};
    dates?: any;
    // dates?: Dates | undefined;
    // newDate: string;
    isFavorite: boolean,
  }
  title: string,
  newDate: string,
  index: number
}

type LoaderProps = {
  src: string,
  width: number | string,
  quality?: number | string | undefined, 
  alt?: number,
}



export default function Comic ({comic, title, newDate, index}: Props) {
  const myLoader = ({ src, width, quality }: LoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

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

  return (
    <div className={styles.comicDiv} key={index} >
        <ul className={styles.ul}>
            {image}
            <Button comic={comic}  />
            <Detail comic={comic} title={title} newDate={newDate}/>
        </ul>
    </div>
  )
}
