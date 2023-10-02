import { HeartIcon } from "@/public/assets/HeartIcon";

export default function FavouriteButton({
  slug,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <button
      onClick={() => {
        onToggleFavourite(slug);
      }}
    >
      <HeartIcon fill={isFavourite ? "red" : "grey"} />
    </button>
  );
}
