import { useState, useEffect, FC, FormEvent, ChangeEvent} from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getYear } from 'date-fns';
import moviesApiService from '../../services/movies-api';
import { SearchFormInput, SearchFormButton, SearchForm } from './Movies.styled';
import { IMovie } from "../MovieDetails/MovieDetails";

type NewParams = {
  query?: string;
}

const Movies: FC = () => {
  const [searchingMovies, setSearchingMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<string | unknown>('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query: string = searchParams.get('query') ?? '';

  const updateQueryString = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value.toLowerCase();
    const newParams: NewParams = newQuery !== '' ? { query: newQuery } : {};
    setSearchParams(newParams);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (query.trim() === '') {
      return alert('🦄 Please enter text to search movies');
    }
    setSearchParams({ query: query });
  };

  useEffect(() => {
    async function getSearchingMovies() {
      try {
        const movies = await moviesApiService.fetchSearchingMovies(query);
        if (movies.results.length !== 0) {
          setSearchingMovies(movies.results);
          setError('');
        } else {
          setError('🙅‍♀️ Unfortunately there are no such movies');
        }
      } catch (error) {
        setSearchingMovies([]);
        setError(error);
      }
    }
    if (query) {
      getSearchingMovies();
    }
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={updateQueryString}
        />
        <SearchFormButton type="submit">
          <span>Search</span>
        </SearchFormButton>
      </SearchForm>
      {typeof(error) === 'string' && error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {searchingMovies.map(({ id, title, release_date }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title} ({getYear(new Date(release_date))}) 
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
