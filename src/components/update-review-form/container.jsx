import { useCallback, useEffect, useMemo } from 'react';

import { useUpdateReviewMutation } from '../../redux/service/api';
import { ReviewForm } from '../review-form/component';

export const UpdateReviewFormContainer = ({ review, onCancel, onSave }) => {
  const [updateReview, { isLoading }] = useUpdateReviewMutation();
  const { text, rating } = review;
  const isOldLoading = isLoading;

  const handleSave = useCallback(
    (form) => {
      updateReview({
        ...review,
        ...form,
      });
    },
    [updateReview, review],
  );

  const formValue = useMemo(
    () => ({
      text: text,
      rating: rating,
    }),
    [text, rating],
  );

  useEffect(() => {
    if (isOldLoading && !isLoading) {
      onSave();
    }
  }, [isLoading, isOldLoading, onSave]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <ReviewForm initialValue={formValue} onSaveClick={handleSave} onCancelClick={onCancel} />;
};
