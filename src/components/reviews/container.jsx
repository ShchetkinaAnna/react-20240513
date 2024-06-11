import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useRequest } from '../../hooks/use-request';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurant-id';
import { REQUEST_STATUS } from '../../redux/ui/request/constants';

import { Reviews } from './component';

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) => selectRestaurantReviewIds(state, restaurantId));

  const requestStatus = useRequest(
    getReviewsByRestaurantId,
    useMemo(() => ({ restaurantId }), [restaurantId]),
  );

  if (requestStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  if (!reviewIds) {
    return '';
  }

  return <Reviews ids={reviewIds} />;
};
