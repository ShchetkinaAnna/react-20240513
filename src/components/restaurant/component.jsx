import { useState } from "react";
import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";

export const Restaurant = ({ restaurant }) => {
  const [restaurantsOrder, setRestaurantOrder] = useState([]);

  const callbackMenuOrder = (idDish, count) => {
    const restaurantOrder = restaurantsOrder.find((item) => item.id === restaurant.id);
    if (restaurantOrder) {
      const menu = restaurantOrder.menu;
      const menuDish = menu.find((item) => item.id === idDish);
      if (menuDish) {
        menuDish.count = count;
      } else {
        menu.push({ id: idDish, count: count });
      }
    } else {
      restaurantsOrder.push({ id: restaurant.id, menu: [{ id: idDish, count: count }] });
    }

    setRestaurantOrder([...restaurantsOrder]);
  };

  const restaurantOrder = restaurantsOrder.find((item) => item.id === restaurant.id);
  const menuWithOrder = restaurant.menu?.map((dish) => ({
    ...dish,
    count: restaurantOrder?.menu.find((dishOrder) => dishOrder.id === dish.id)?.count,
  }));

  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <Menu menu={menuWithOrder} callbackMenuOrder={callbackMenuOrder} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};