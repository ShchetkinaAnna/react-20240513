const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const Dish = ({ dish, callbackDishOrder }) => {
    const count = dish.count || 0;

    const increment = () => {
      if (count < MAX_DISHES) {
        callbackDishOrder(count + 1);
      }
    };
    
    const decrement = () => {
      if (count > MIN_DISHES) {
        callbackDishOrder(count - 1);
      }
    };

    return (<div>
      <span>{dish.name}</span>
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>);
};