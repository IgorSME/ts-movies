import { ItemBox } from '../../components/CastItem/CastItem.styled';
import { ReviewsItem } from '../../components/ReviewsItem/ReviewsItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiMovieReviews } from '../../services/apiMovies';

 const Reviews:React.FC =()=> {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      if (movieId === undefined) {
    return;
  }
      const response = await apiMovieReviews(movieId);
      await setReviews(response.data.results);
    }
    fetch();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }
  return (
    <ItemBox>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id} author={author} content={content} />
      ))}
    </ItemBox>
  );
}
export default Reviews