
export type ITrending =Array<{
    id: number;
    video: boolean;
    vote_count: number;
    vote_average: number;
    title: string;
    release_date: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    poster_path: string;
    popularity: number;
  }>

export interface IMovieItem{
  id: number,
  title:string
}
export interface IMovieDetails {
  title: string;
  overview: string;
  vote_average: number;
  genres: Array<{ id: number; name: string }>;
  poster_path: string | null;
}


export type ICast = Array<{
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}>;

export interface ICastItem{
  name: string;
  character: string;
  profile_path: string;
}

export interface IReviewItem{
  author: string,
  content: string 
}
export interface ISearch{
  onSubmit:(movie: string) => void
}