import { useState } from 'react';
import { Button, Form } from './SearchForm.styled';
import { ISearch } from '../../types/appTypes';

export const SearchForm:React.FC<ISearch> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={onChange} />
      <Button>Search</Button>
    </Form>
  );
};


