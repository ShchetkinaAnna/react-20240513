import { Tab } from '../tab/component';

/* eslint-disable react/jsx-key */
export const RestaurantsTabs = ({ restaurants }) => {
  if (!restaurants) {
    return;
  }

  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab to={`${id}`} title={name}></Tab>
      ))}
    </div>
  );
};
