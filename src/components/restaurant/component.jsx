import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";

export const Restaurant = ({ restaurant }) => {
    return (
      <div>
        <h2>Название ресторана: {restaurant.name}</h2>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    );
  };