import { HeartIcon } from "@/public/assets/HeartIcon";

export default function FavouriteButton({ isFavourite, onToggleFavourite }) {
  return (
    <button onClick={onToggleFavourite}>
      <HeartIcon fill={isFavourite ? "red" : "grey"} />
    </button>
  );
}
