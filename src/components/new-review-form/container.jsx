import { useCallback } from 'react';

import { useCreateReviewMutation } from '../../redux/service/api';
import { ReviewForm } from '../review-form/component';

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  const handleSave = useCallback(
    (form) => {
      createReview({
        restaurantId: restaurantId,
        newReview: { ...form, userId: 'a304959a-76c0-4b34-954a-b38dbf310360' },
      });
    },
    [restaurantId, createReview],
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <ReviewForm onSaveClick={handleSave} />;
};
