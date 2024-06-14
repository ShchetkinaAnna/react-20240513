import { useGetRestaurantsQuery } from '../../redux/service/api';
import { selectEntityFromResult } from '../../redux/service/api/selectors';
import { Menu } from '../menu/component';
import { NewReviewFormContainer } from '../new-review-form/container';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurantId }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectEntityFromResult(restaurantId),
  });

  if (!restaurant) {
    return '';
  }

  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />
      <h3>Добавить отзыв:</h3>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
