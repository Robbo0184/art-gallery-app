import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";
import { useFetchData } from "@/hooks/useFetchData";


export default function App({ Component, pageProps }) {


  const {
    data: pieces,
    loading,
    error,
  } = useFetchData('https://example-apis.vercel.app/api/art')


  const [favourites, setFavourites] = useLocalStorageState("favourites", {
    defaultValue: [],
  })



  const handleOnFavourite = (piece, isFavourite) => {
    isFavourite
      ? setFavourites(favourites.filter((slug) => slug != piece.slug))
      : setFavourites([...favourites, piece.slug])
  }

  console.log(pieces);

  if (!pieces) return;
  if (error) return <div>{error.message}</div>
  if (loading) return <div>Loading...</div>




  return (
    <>
      <GlobalStyle />
      <h1>ART GALLERY</h1>
      <Layout >
      <Component
        {...pageProps}
        favourites={favourites}
        pieces={pieces}
        onFavourite={handleOnFavourite}
      />
      </Layout>
    </>
  );
}
