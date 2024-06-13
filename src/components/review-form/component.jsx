import { useReducer } from 'react';

import { useCreateReviewMutation, useUpdateReviewMutation } from '../../redux/service/api';
import { Rating } from '../rating/component';
import { StyledButton } from '../styled-button/component';

import { MODE_FORM } from './constants';

const SET_REVIEW_TEXT = 'SET_REVIEW_TEXT';
const SET_REVIEW_RATING = 'SET_REVIEW_RATING';
const RESET_FORM = 'RESET_FORM';

const DEFAULT_FORM_VALUE = {
  text: '',
  rating: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_REVIEW_TEXT:
      return { ...state, text: action.payload };
    case SET_REVIEW_RATING:
      return { ...state, rating: action.payload };
    case RESET_FORM:
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state;
  }
}

export const ReviewForm = ({ restaurantId, review, modeForm, cancelEdit }) => {
  const [form, dispatch] = useReducer(
    reducer,
    modeForm === MODE_FORM.create
      ? DEFAULT_FORM_VALUE
      : {
          text: review.text,
          rating: review.rating,
        },
  );

  const [createReview, { isLoading: isLoadingCreateReview }] = useCreateReviewMutation();
  const [updateReview, { isLoading: isLoadingEditReview }] = useUpdateReviewMutation();

  if (isLoadingCreateReview || isLoadingEditReview) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <span>Текст:</span>
        <input
          type="text"
          value={form.text}
          onChange={(event) => dispatch({ type: SET_REVIEW_TEXT, payload: event.target.value })}
        />
      </div>
      <div>
        <span>Рейтинг:</span>
        <Rating
          value={form.rating}
          onChange={(ratingValue) => dispatch({ type: SET_REVIEW_RATING, payload: ratingValue })}
        />
      </div>
      {modeForm === MODE_FORM.create && (
        <StyledButton
          onClick={() => {
            createReview({
              restaurantId,
              newReview: {
                ...form,
                userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
              },
            });
            dispatch({ type: RESET_FORM });
          }}
        >
          Сохранить
        </StyledButton>
      )}
      {modeForm === MODE_FORM.edit && (
        <>
          <StyledButton
            onClick={() => {
              updateReview({
                review: {
                  ...review,
                  ...form,
                },
              });
            }}
          >
            Сохранить
          </StyledButton>
          <StyledButton onClick={cancelEdit}>Отмена</StyledButton>
        </>
      )}
    </div>
  );
};
