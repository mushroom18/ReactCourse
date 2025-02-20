import { useState, useEffect } from "react";

const Key = "6d694543";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  //const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErroeMessage] = useState("");

  useEffect(
    function () {
      //abortController is a browser API
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setErroeMessage("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${Key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("something wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          //console.log(data.Search);
        } catch (err) {
          console.error(err.message);
          if (err.name !== "AbortError") {
            setErroeMessage(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setErroeMessage("");
        return;
      }
      fetchMovies();
      return () => controller.abort();
    },
    [query]
  );
  return { movies, isLoading, errorMessage };
}
