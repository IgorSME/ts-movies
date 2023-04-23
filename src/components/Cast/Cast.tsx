import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiMovieCast } from '../../services/apiMovies';
import { CastItem } from '../../components/CastItem/CastItem';
import { ItemBox } from '../../components/CastItem/CastItem.styled';
import { ICast } from '../../types/appTypes';


 const Cast:React.FC =() =>{
  const [cast, setCast] = useState<ICast>([]);
  const  {movieId}  = useParams();


  useEffect(() => {
    async function fetch() {
      try {
         if (movieId === undefined) {
    return;
  }
        const response = await apiMovieCast(movieId);
        await setCast(response.data.cast);
      } catch (error) {}
    }
    fetch();
  }, [movieId]);

  if (cast.length === 0) {
    return <></>;
  }

  return (
    <ItemBox>
      {cast.map(({ id, name, character, profile_path }) => (
        <CastItem
          key={id}
          
          name={name}
          character={character}
          profile_path={profile_path}
        />
      ))}
    </ItemBox>
  );
}
export default Cast