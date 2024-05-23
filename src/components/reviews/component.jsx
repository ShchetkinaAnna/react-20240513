import { Review } from "../review/component";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews }) => {
  if (!reviews) {
    return "";
  }

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
      {reviews.map((review) => (
        <li>
          <Review review={review} />
        </li>
      ))}
      </ul>
    </div>
  );
};