import cn from 'classnames';
import { ChangeEvent, memo } from 'react';
import { Form } from 'react-bootstrap';
import s from './searchInput.module.scss';

interface SearchInputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = memo(({ handleChange }: SearchInputProps) => {
  return (
      <Form.Group className={cn(s.input, 'mb-4')} controlId="formBasicEmail">
        <Form.Label>Github Searcher</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="search"
          placeholder="search"
        />
      </Form.Group>
  );
});

SearchInput.displayName = 'SearchInput';
export default SearchInput;
