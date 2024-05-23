import { useState } from "react";
import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";

export const Restaurant = ({ restaurant }) => {
  const [restaurantsOrder, setRestaurantOrder] = useState({});

  const callbackMenuOrder = (idDish, count) => {
    setRestaurantOrder({
      ...restaurantsOrder,
      [restaurant.id]: {
        ...restaurantsOrder[restaurant.id],
        menu: {
          ...restaurantsOrder[restaurant.id]?.menu,
          [idDish]: { count: count },
        },
      },
    });
  };

  const menuWithOrder = restaurant.menu?.map((dish) => ({
    ...dish,
    count: restaurantsOrder[restaurant.id]?.menu[dish.id]?.count,
  }));

  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <Menu menu={menuWithOrder} callbackMenuOrder={callbackMenuOrder} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};