import { Menu } from '../menu/component';
import { NewReviewForm } from '../new-review-form/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <Menu dishIds={restaurant.menu} />
      <Reviews reviewIds={restaurant.reviews} />
      <NewReviewForm />
    </div>
  );
};
