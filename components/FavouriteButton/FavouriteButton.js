import { HeartIcon } from "@/public/assets/HeartIcon";

export default function FavouriteButton({
 
  isFavourite,
  onFavourite,
}) {
  return (
    <button
      onClick={
        onFavourite
      }
    >
      <HeartIcon fill={isFavourite ? "red" : "grey"} />
    </button>
  );
}
