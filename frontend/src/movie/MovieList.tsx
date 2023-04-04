import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  // This is the useEffect method
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  // This is filtering the data to jus include the edited films
  const filteredMovies = movieData.filter((m) => m.edited === "Yes");

  //This is sorting the filtered data to be alphabetized by title name
  filteredMovies.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="row">
        <h4>Joel Hilton's list of movies</h4>
      </div>

      <table className="table table-border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Category</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Movie ID</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>

        <tbody>
          {filteredMovies.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.director}</td>
              <td>{m.category}</td>
              <td>{m.year}</td>
              <td>{m.rating}</td>
              <td>{m.movieId}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
