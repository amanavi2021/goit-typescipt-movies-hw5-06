import { useState, useEffect, useRef, Suspense, FC } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getYear } from 'date-fns';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import moviesApiService from '../../services/movies-api';
import {
  BackLink,
  MovieCard,
  MovieImage,
  MovieInfo,
  InfoLink,
  MovieNav,
} from './MovieDetails.styled';

type Genre = {
  name: string;
}

export interface IMovie {
  id?: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: Date;
  poster_path: string;
  genres: Genre[]
}

const initialValues = {
  title: "",
  overview: "",
  vote_average: 0,
  release_date: new Date(),
  poster_path: "",
  genres: []
}

const MovieDetails: FC = () => {
  const { id=""} = useParams<{id?:string}>();
  const [movie, setMovie] = useState<IMovie>(initialValues);
  const [error, setError] = useState<string|unknown>('');
  const location = useLocation();
  const backLink = useRef<string>(location.state?.from ?? '/');

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getMovieDetails() {
      try {
        const movie = await moviesApiService.fetchMovie(id);
        setMovie(movie);
        setError('');
      } catch (error) {
        setMovie(initialValues);
        setError(error);
      }
    }

    getMovieDetails();
  }, [id]);

  const { title, overview, vote_average, release_date, poster_path, genres } =
    movie;
  const year: number = getYear(new Date(release_date));
  let genreList = '';
  if (genres.length !== 0) {
    genreList = genres.map(genre => genre.name).join(' ') ?? '';
  }

  const defaultImg: string =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <BackLink to={backLink.current}>
        <IoArrowBackCircleSharp
          style={{ marginRight: 8, width: '20', height: '20' }}
        />
        Go back
      </BackLink>
      {movie.title !== "" && !error && (
        <div>
          <MovieCard>
            <MovieImage
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              alt={title}
              width="200"
            />
            <MovieInfo>
              <h2>
                {title} ({year})
              </h2>
              <p>User Score: {Math.round(vote_average * 10)}% </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genreList}</p>
            </MovieInfo>
          </MovieCard>
          <hr />
          <h3>Additional information</h3>
          <MovieNav>
            <li>
              <InfoLink to="cast">Cast</InfoLink>
            </li>
            <li>
              <InfoLink to="reviews">Reviews</InfoLink>
            </li>
          </MovieNav>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
