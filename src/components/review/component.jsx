import classNames from 'classnames';
import { useCallback, useState } from 'react';

import { useGetUsersQuery } from '../../redux/service/api';
import { selectEntityFromResult } from '../../redux/service/api/selectors';
import { StyledButton } from '../styled-button/component';
import { UpdateReviewFormContainer } from '../update-review-form/container';

import styles from './styles.module.css';

export const Review = ({ review, className }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: selectEntityFromResult(review.userId),
  });

  const switchEditMode = useCallback(() => setIsEdit((isEditOn) => !isEditOn), []);

  if (!review) {
    return '';
  }

  return (
    <div className={classNames(styles.review, className)}>
      {isEdit ? (
        <UpdateReviewFormContainer
          review={review}
          onCancel={switchEditMode}
          onSave={switchEditMode}
        ></UpdateReviewFormContainer>
      ) : (
        <>
          <div>
            <span>Пользователь: </span>
            <span>{user.name}</span>
          </div>
          <div>
            <span>Текст: </span>
            <span>{review.text}</span>
          </div>
          <div>
            <span>Рейтинг: </span>
            <span>{review.rating}</span>
          </div>
          <StyledButton onClick={switchEditMode}>Редактировать</StyledButton>
        </>
      )}
    </div>
  );
};
