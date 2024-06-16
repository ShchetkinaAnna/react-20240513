import { useSearchParams } from 'react-router-dom';

import { Search } from '../search/component';
import { Tab } from '../tab/component';

/* eslint-disable react/jsx-key */
export const RestaurantsTabs = ({ restaurants }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') || '';

  if (!restaurants) {
    return;
  }

  return (
    <div>
      <Search searchValue={searchValue} setSearchValue={setSearchParams} />
      {restaurants
        .filter(({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
        .map(({ id, name }) => (
          <Tab to={`${id}`} title={name}></Tab>
        ))}
    </div>
  );
};
