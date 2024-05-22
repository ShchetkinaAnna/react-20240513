import { createRoot } from 'react-dom/client'
import { restaurants } from "./constants/mock";
import { RestaurantTabs } from "./components/restauranttabs/component";
import { Layout } from "./components/layout/component";

const root = createRoot(document.getElementById("root"));

root.render(
  <Layout>
    <RestaurantTabs restaurants={restaurants} />
  </Layout>
);