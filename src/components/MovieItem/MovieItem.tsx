import { useLocation } from 'react-router-dom';
import { Item, StyledLink } from './MovieItem.styled';
import { IMovieItem } from '../../types/appTypes';

export const MovieItem:React.FC<IMovieItem> = ({ id, title }) => {
  const location = useLocation();

  return (
    <Item>
      <StyledLink to={`/movies/${id}`} key={id} state={{ from: location }}>
        {title}
      </StyledLink>
    </Item>
  );
};

