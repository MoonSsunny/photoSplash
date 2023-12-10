import { ChangeEvent, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';
import { InputProps } from 'models/photo';

const SearchBox = styled.div`
  position: relative;
  .searchIcon {
    width: 35px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 700px;
  height: 55px;
  border: 1px solid ${colors.gray};
  padding: 20px 55px 20px 20px;
  border-radius: 12px;
`;

function Input({ placeholder, update, onSearch }: InputProps) {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    setQuery(target);
    update?.(target);
  };

  const handleSearch: MouseEventHandler<HTMLImageElement> = (event) => {
    onSearch?.(query);
  };

  return (
    <SearchBox>
      <SearchInput
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <img
        src="search.svg"
        alt="search"
        className="searchIcon"
        onClick={handleSearch}
      />
    </SearchBox>
  );
}

export default Input;
