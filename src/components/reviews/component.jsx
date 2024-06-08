import { ReviewContainer } from '../review/container';

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviewIds }) => {
  if (!reviewIds) {
    return '';
  }

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviewIds.map((reviewId) => (
          <li>
            <ReviewContainer id={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
