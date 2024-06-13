import { useState } from 'react';

import { ReviewForm } from '../review-form/component';
import { MODE_FORM } from '../review-form/constants';
import { StyledButton } from '../styled-button/component';

export const Review = ({ review }) => {
  const [isEdit, setIsEdit] = useState(false);

  if (!review) {
    return '';
  }

  return (
    <div>
      {!isEdit && (
        <>
          <span>{review.text}</span>
          <StyledButton onClick={() => setIsEdit(!isEdit)}>Редактировать</StyledButton>
        </>
      )}
      {isEdit && (
        <ReviewForm
          review={review}
          modeForm={MODE_FORM.edit}
          cancelEdit={() => setIsEdit(false)}
        ></ReviewForm>
      )}
    </div>
  );
};
