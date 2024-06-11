import { useSelector } from 'react-redux';

import { selectReviewById } from '../../redux/entities/review/selectors';

import { Review } from './component';

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return '';
  }

  return <Review review={review} />;
};
