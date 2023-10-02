import heartIcon from "../../public/assets/heart.svg";
import Image from "next/image";
export default function FavouriteButton({ isFavourite, onToggleFavourite }) {
  return <Image src={heartIcon} alt="favourite heart icon"></Image>;
}
