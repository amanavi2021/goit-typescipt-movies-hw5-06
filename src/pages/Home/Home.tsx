import { useState, useEffect, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getYear } from 'date-fns';

import moviesApiService from '../../services/movies-api';

import { IMovie } from "../MovieDetails/MovieDetails"

const Home: FC = () => {
  const [trandingMovies, setTrandingMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<string|unknown>('');
  const location = useLocation();

  useEffect(() => {
    async function getTrandingMovies() {
      try {
        const movies = await moviesApiService.fetchTrandingMovies();
        setTrandingMovies(movies.results);
        setError('');

      } catch (error) {
        setTrandingMovies([]);
        setError(error);
      }
    }
    getTrandingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {typeof(error) === 'string' && error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {trandingMovies.map(({ id, title, release_date }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title} ({getYear(new Date(release_date))})
              </Link>
            </li>
          ))}
          </ul>
          
      )}
    </div>
  );
};

export default Home;
