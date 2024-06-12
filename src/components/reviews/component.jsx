import { useGetReviewsByRestaurantIdQuery } from '../../redux/service/api';
import { Review } from '../review/component';

/* eslint-disable react/jsx-key */
export const Reviews = ({ restaurantId }) => {
  const { data: reviews, isFetching } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviews) {
    return '';
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
