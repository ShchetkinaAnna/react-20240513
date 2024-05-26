export const Counter = ({value, max = 5, min = 0, onChange}) => {
    const increment = () => {
      onChange(value + 1);
    };
    
    const decrement = () => {
      onChange(value - 1);
    };

    return (
      <div>
        <button onClick={decrement} disabled={value === min}>-</button>
        {value}
        <button onClick={increment} disabled={value === max}>+</button>
      </div>
    );
};