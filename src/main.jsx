import { createRoot } from 'react-dom/client'
import { restaurants } from "./constants/mock";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { Restaurant } from "./components/restaurant/component";

/* eslint-disable react/jsx-key */
const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header>Header</Header>
    <main>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}      
    </main>
    <Footer>Footer</Footer>
  </div>
);