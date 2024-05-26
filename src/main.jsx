import { createRoot } from 'react-dom/client'
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Layout } from "./components/layout/component";

const root = createRoot(document.getElementById("root"));

root.render(
  <Layout>
    <Restaurants restaurants={restaurants} />
  </Layout>
);