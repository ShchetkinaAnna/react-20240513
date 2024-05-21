import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";

export const Restaurant = ({ restaurant }) => {
    return (
      <div>
        <h2>Название ресторана: {restaurant.name}</h2>
        <div>
          <h3>Меню</h3>
          <Menu menu={restaurant.menu} />
        </div>
        <div>
          <h3>Отзывы</h3>
          <Reviews reviews={restaurant.reviews} />
        </div>
      </div>
    );
  };