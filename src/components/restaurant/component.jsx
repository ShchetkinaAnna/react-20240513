import { MenuContainer } from '../menu/container';
import { NewReviewForm } from '../new-review-form/component';
import { ReviewsContainer } from '../reviews/container';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewsContainer restaurantId={restaurant.id} />
      <NewReviewForm />
    </div>
  );
};
