import { useState } from "react";

function MovieWatchlist() {

  const [movies, setMovies] = useState([]);

  const [movieTitle, setMovieTitle] = useState("");

  function handleAddMovie() {
    if (movieTitle === "") {
      return;
    }

    const newMovie = {
      id: Date.now(), 
      title: movieTitle,
      watched: false,
    };

    const updatedList = [...movies, newMovie];
    setMovies(updatedList);
    setMovieTitle("");
  }

  function handleDeleteMovie(id) {
    const updatedList = movies.filter((movie) => movie.id !== id);
    setMovies(updatedList);
  }
  
  function handleToggleWatched(id) {
    const updatedList = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, watched: !movie.watched };
      }
      return movie;
    });

    setMovies(updatedList);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      
      <h1 className="text-2xl font-bold text-center mb-4">
         Movie Watchlist
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter movie name"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={handleAddMovie}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      {movies.length === 0 && (
        <p className="text-gray-400 text-center">No movies yet!</p>
      )}
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex items-center justify-between border-b py-2"
          >
            <span className={movie.watched ? "line-through text-gray-400" : ""}>
              {movie.title}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggleWatched(movie.id)}
                className="bg-green-500 text-white px-3 py-1 rounded text-sm"
              >
                {movie.watched ? "Watched" : "Not Watched"}
              </button>

              <button
                onClick={() => handleDeleteMovie(movie.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MovieWatchlist