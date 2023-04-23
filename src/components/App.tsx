import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';



const Home = lazy(() =>
  import('../pages/Home/Home' /*webpackChunkName: "home"*/)
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies' /*webpackChunkName: "movies"*/)
);
const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /*webpackChunkName: "movie-details"*/
  )
);
const Cast = lazy(() => import('./Cast/Cast' /*webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /*webpackChunkName: "reviews"*/)
);
const NotFound = lazy(() =>
  import('../pages/NotFound/NotFoumd' /*webpackChunkName: "not-found"*/)
);

export const App:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
