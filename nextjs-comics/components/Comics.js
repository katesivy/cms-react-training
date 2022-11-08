import Image from "next/image";


export default function Comics({comic}) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div>
        <ul >{comic.title}
        <Image
            loader={myLoader}
            src={comic.thumbnail}
            alt={comic.id} 
            width={200}
            height={200}
        />
        </ul>
    </div>
  )
}

