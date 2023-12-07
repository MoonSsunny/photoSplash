import { ChangeEvent, useState } from 'react';

function Input() {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="고해상도 이미지 검색"
    />
  );
}

export default Input;
