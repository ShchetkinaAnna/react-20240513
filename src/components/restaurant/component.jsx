import { useGetRestaurantsQuery } from '../../redux/service/api';
import { selectRestaurantFromResult } from '../../redux/service/api/selectors';
import { Menu } from '../menu/component';
import { NewReviewForm } from '../new-review-form/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurantId }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectRestaurantFromResult(restaurantId),
  });

  if (!restaurant) {
    return '';
  }

  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <Menu restaurantId={restaurant.id} />
      <Reviews restaurantId={restaurant.id} />
      <NewReviewForm restaurantId={restaurant.id} />
    </div>
  );
};
