import React from 'react';
import { useEffect, useState } from 'react';
import { apiMovieTrennding } from '../../services/apiMovies';
import { MovieItem } from '../../components/MovieItem/MovieItem';
import { Container } from './Home.styled';
import { ITrending } from '../../types/appTypes';

const Home:React.FC<{} | undefined> = ()=> {
  const [movies, setMovies] = useState<ITrending | null>(null);

  useEffect(() => {
    
    async function fetch() {
      try {
        const response = await apiMovieTrennding();
        await setMovies(response.data.results);
      } catch (error) {}
    }
    fetch();
  }, []);

  if (!movies) {
  return <></>;
}

  return (
    <Container>
      {movies && movies.map(({ id, title }) => (
        <MovieItem key={id} id={id} title={title}></MovieItem>
      ))}
    </Container>
  );
}
export default Home;