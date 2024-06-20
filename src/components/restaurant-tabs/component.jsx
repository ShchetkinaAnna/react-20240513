import { Tab } from '../tab/component';

export const RestaurantTabs = () => {
  return (
    <div>
      <Tab to={'menu'} title={'Меню'}></Tab>
      <Tab to={'reviews'} title={'Отзывы'}></Tab>
    </div>
  );
};
