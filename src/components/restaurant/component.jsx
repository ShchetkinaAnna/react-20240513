import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";
import { NewReviewForm } from "../new-review-form/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <NewReviewForm />
    </div>
  );
};