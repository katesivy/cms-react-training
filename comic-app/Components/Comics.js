import Image from "next/image";
import Detail from "./Detail";
import styles from '../styles/Comic.module.css'

export default function Comics({comic, title, newDate}) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div>
        <ul className={styles.ul}>
          <Image className={styles.image}
              loader={myLoader}
              src={comic.thumbnail}
              alt={comic.id} 
              width={200}
              height={300}
          />
          <Detail comic={comic} title={title} newDate={newDate}/>
        </ul>
    </div>
  )
}