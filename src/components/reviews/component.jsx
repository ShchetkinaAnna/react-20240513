import { useGetReviewsByRestaurantIdQuery } from '../../redux/service/api';
import { Review } from '../review/component';

import styles from './styles.module.css';

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
    <div className={styles.reviews}>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <Review review={review} className={styles.reviews__item} />
      ))}
    </div>
  );
};
