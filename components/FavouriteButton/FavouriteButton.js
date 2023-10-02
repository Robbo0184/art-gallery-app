import { HeartIcon } from "@/public/assets/HeartIcon";

export default function FavouriteButton({ onToggleFavorite, isFavourite }) {
    return (
        <button onClick={onToggleFavorite}>
            <HeartIcon fill={isFavourite ? "red" : "black"} />
        </button>

    )
}



