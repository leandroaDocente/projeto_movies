import { Link } from 'react-router-dom';
import MoviesScore from '../MoviesScore';

function MovieCard() {
  const movies = {
    id: 1,
    image:
      'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg',
    title: 'Os fantasmas ainda se divertem: Beetlejuice Beetlejuice',
    count: 2,
    score: 4.0,
  };
  return (
    <div>
      <img
        className="movies-card-image"
        src={movies.image}
        alt={movies.title}
      />
      <h3>{movies.title}</h3>
      <MoviesScore />
      <Link to={`/form/${movies.id}`}>
        <div className="movies-btn">Avaliar</div>
      </Link>
    </div>
  );
}
export default MovieCard;
