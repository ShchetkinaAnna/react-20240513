import { Tab } from '../tab/component';

export const MainTabs = () => {
  return (
    <div>
      <Tab to={'/'} title={'Главная'}></Tab>
      <Tab to={'/restaurants'} title={'Рестораны'}></Tab>
    </div>
  );
};
