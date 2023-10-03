import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces, onToggleFavourite }) {
  const randomArt = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <Spotlight
      isFavourite={randomArt.isFavourite}
      slug={randomArt.slug}
      image={randomArt.imageSource}
      artist={randomArt.artist}
      onToggleFavourite={onToggleFavourite}
    />
  );
}
