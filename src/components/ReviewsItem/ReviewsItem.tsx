import { ItemRev } from './ReviewsItem.styled';
import { Text } from './ReviewsItem.styled';
import { IReviewItem } from '../../types/appTypes';

export const ReviewsItem:React.FC<IReviewItem> = ({ author, content }) => {
  return (
    <ItemRev>
      <h3>Author : {author}</h3>
      <Text>{content}</Text>
    </ItemRev>
  );
};

