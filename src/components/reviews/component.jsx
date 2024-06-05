import { Review } from '../review/component';

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
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
