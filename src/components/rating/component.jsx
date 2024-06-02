import { StyledButton } from '../styled-button/component';

const ratingButtons = [1, 2, 3, 4, 5];

/* eslint-disable react/jsx-key */
export const Rating = ({ value, onChange }) => {
  return (
    <div>
      {ratingButtons.map((text) => (
        <StyledButton disabled={value === text} onClick={() => onChange(text)}>
          {text}
        </StyledButton>
      ))}
    </div>
  );
};
