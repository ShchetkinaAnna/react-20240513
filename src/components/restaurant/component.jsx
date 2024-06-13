import { useGetRestaurantsQuery } from '../../redux/service/api';
import { selectRestaurantFromResult } from '../../redux/service/api/selectors';
import { Menu } from '../menu/component';
import { ReviewForm } from '../review-form/component';
import { MODE_FORM } from '../review-form/constants';
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
      <h3>Добавить отзыв:</h3>
      <ReviewForm restaurantId={restaurant.id} modeForm={MODE_FORM.create} />
    </div>
  );
};
