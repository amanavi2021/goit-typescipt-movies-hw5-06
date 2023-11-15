import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApiService from '../../services/movies-api';
import { CastItem, ActorPhoto, ActorName, CastList } from './Cast.styled';

interface ICast {
   
  cast_id: string;
  character: string;
  name: string;
  profile_path: string;
}


const Cast = () => {
  const { id="" } = useParams<{id?:string}>();
  const [cast, setCast] = useState<ICast[]>([]);
  const [error, setError] = useState<string | unknown>('');
  const defaultImg: string = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getCast() {
      try {
        const credits = await moviesApiService.fetchCast(id);
      
        if (credits.cast.length !== 0) {
          setCast(credits.cast);
          setError('');
        } else {
          setError("🦸‍♂️ We don't have any cast for this movie");
    
        }
      } catch (error) {
        setCast([]);
        setError(error);
      }
    }

    getCast();
  }, [id]);

  return (
    <>{
        typeof (error) === "string" && error ? <p>{error}</p> 
        :<CastList>
        {cast.map(({ cast_id, character, name, profile_path }) => (
          <CastItem key={cast_id}>
            <ActorPhoto
              src={profile_path ?           
                   `https://image.tmdb.org/t/p/w500${profile_path}`
                   : defaultImg}
              alt={name}
              width="70"
            />
            <ActorName>{name}</ActorName>
            <p>Charecter: {character}</p>
          </CastItem>
        ))}
      </CastList>
    }
    </>
   
  );
};

export default Cast;
