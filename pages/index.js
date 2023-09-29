
import useSWR from "swr";

import Spotlight from "@/components/Spotlight/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SpotlightPage() {
 

  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  if (!pieces) return;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const randomArt = pieces[Math.floor(Math.random() * pieces.length)];



  return (
    <div>
      <h1>Art Pieces </h1>
      <Spotlight image={randomArt.imageSource} artist={randomArt.artist} />

    </div>
  );
}
