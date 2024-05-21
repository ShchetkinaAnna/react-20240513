import { createRoot } from 'react-dom/client'
import { restaurants } from "./constants/mock";
import { Restaurant } from "./components/restaurant/component";
import { Layout } from "./components/layout/component";

/* eslint-disable react/jsx-key */
const root = createRoot(document.getElementById("root"));

root.render(
  <Layout>
    {restaurants && restaurants.map((restaurant) => (
      <Restaurant restaurant={restaurant} />
    ))}      
  </Layout>
);