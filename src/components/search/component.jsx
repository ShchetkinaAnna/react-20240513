import { useEffect, useState } from 'react';

export const Search = ({ initialValue, setValue, delay }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue({ search: searchValue });
    }, delay);

    return () => clearTimeout(timeout);
  }, [searchValue, setValue, delay]);

  return (
    <div>
      <span>Поиск:</span>
      <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
    </div>
  );
};
