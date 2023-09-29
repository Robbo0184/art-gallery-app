import Image from "next/image"
export default function ArtPiecePreview({ image, title, artist }) {
   
    return (
        <div>
        <img width={200} height={200} src={image} alt="artpiece" />
            <h2>{title}</h2>
            <span>{artist}</span>

        </div>
    )
}