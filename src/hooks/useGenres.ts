import genres from "../data/genres";

//import if fetching Genre List from backend
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//Fetch Genre List from backend
// const useGenres = () => useData<Genre>("/genres");

//Get Genre List from static data
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
