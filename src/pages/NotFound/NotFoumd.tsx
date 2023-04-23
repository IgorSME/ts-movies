import { Link } from 'react-router-dom';
import { Box } from './NotFound.styled';

 const NotFound:React.FC = ()=> {
  return (
    <Box>
      <h2>404 page not found!</h2>
      <Link to={'/'}>Go to Homepage</Link>
    </Box>
  );
}

export default NotFound