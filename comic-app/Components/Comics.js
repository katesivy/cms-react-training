import Image from "next/image";
import Detail from "./Detail";
import styles from '../styles/Comic.module.css'
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

export default function Comics({comic, title, newDate}) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const path = comic.images.length ? comic.thumbnail.path + '.' : ''
  const extenstion = comic.images.length? comic.thumbnail.extension : ''
  const imgSrc = path + extenstion
  const image =
      <Image className={styles.image}
        loader={myLoader}
        src={imgSrc}
        alt={comic.id} 
        width={200}
        height={300}
      />
  

  console.log(image)

  return (
    <div>
        <ul className={styles.ul}>
        {image}
          <Detail comic={comic} title={title} newDate={newDate}/>
        </ul>
    </div>
  )
}