const ratingButtons = [1, 2, 3, 4, 5];

/* eslint-disable react/jsx-key */
export const Rating = ({ value, onChange }) => {
  return (
    <div>
      {ratingButtons.map((text) => (
        <button
          style={{ backgroundColor: value === text ? 'green' : '#f0f0f0' }}
          onClick={() => onChange(text)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};