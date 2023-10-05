import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces, onFavourite, favourites }) {
  const randomArt = pieces[Math.floor(Math.random() * pieces.length)];
  const isFavourite = favourites.includes(randomArt.slug)

  return (
    <Spotlight
      piece={randomArt}
      isFavourite={isFavourite}
      onFavourite={() => onFavourite(randomArt)}
    />
  );
}
