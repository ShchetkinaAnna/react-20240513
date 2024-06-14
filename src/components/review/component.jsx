import classNames from 'classnames';
import { useState } from 'react';

import { useGetUsersQuery } from '../../redux/service/api';
import { selectUserFromResult } from '../../redux/service/api/selectors';
import { ReviewForm } from '../review-form/component';
import { MODE_FORM } from '../review-form/constants';
import { StyledButton } from '../styled-button/component';

import styles from './styles.module.css';

export const Review = ({ review, className }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: selectUserFromResult(review.userId),
  });

  if (!review) {
    return '';
  }

  return (
    <div className={classNames(styles.review, className)}>
      {!isEdit && (
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
