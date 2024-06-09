import { ReviewContainer } from '../review/container';

/* eslint-disable react/jsx-key */
export const Reviews = ({ ids }) => {
  if (!ids) {
    return '';
  }

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {ids.map((id) => (
          <li>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
