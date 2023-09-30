import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces }) {
  const randomArt = pieces[Math.floor(Math.random() * pieces.length)];
  console.log(pieces);

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        slug={randomArt.slug}
        image={randomArt.imageSource}
        artist={randomArt.artist}
      />
    </div>
  );
}
