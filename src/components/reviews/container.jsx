import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurant-id';

import { Reviews } from './component';

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) => selectRestaurantReviewIds(state, restaurantId));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviewIds) {
    return '';
  }

  return <Reviews ids={reviewIds} />;
};
