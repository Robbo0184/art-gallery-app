import  useSWR  from "swr";

import ArtPieces from "@/components/ArtPieces/ArtPieces";

const URL = 'https://example-apis.vercel.app/api/art'
const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function HomePage() {
  
const { data: pieces, error, isLoading } = useSWR(URL, fetcher)
  if (!pieces) return;
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <h1>Art Pieces </h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
