import React from "react";
import Image from "next/image";
import Detail from "./Detail";
import styles from '../styles/Comic.module.css'

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
    // id: string,
    // issueNumber: number,
    // creators: string[] | undefined,
    // thumbnail: Thumbnail
  }
  title: string,
  newDate: string,
}

type LoaderProps = {
  src: string,
  width: number | string,
  quality?: number | string | undefined, 
  alt?: number,
  // loader?: {}
}

export default function Comic({comic, title, newDate}: Props) {
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
    <div className={styles.comicDiv}>
        <ul className={styles.ul}>
        {image}
          <Detail comic={comic} title={title} newDate={newDate}/>
        </ul>
    </div>
  )
}