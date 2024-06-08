import { useSelector } from 'react-redux';

import { Menu } from '../menu/component';
import { NewReviewForm } from '../new-review-form/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) => state.restaurant.entities[restaurantId]);

  if (!restaurant) {
    return '';
  }

  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <Menu menuIds={restaurant.menu} />
      <Reviews reviewIds={restaurant.reviews} />
      <NewReviewForm />
    </div>
  );
};
