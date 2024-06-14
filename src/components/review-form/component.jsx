import { useReducer } from 'react';

import { Rating } from '../rating/component';
import { StyledButton } from '../styled-button/component';

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

export const ReviewForm = ({ initialValue = DEFAULT_FORM_VALUE, onSaveClick, onCancelClick }) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

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
      <StyledButton
        onClick={() => {
          onSaveClick(form);
        }}
      >
        Сохранить
      </StyledButton>
      <>{onCancelClick && <StyledButton onClick={onCancelClick}>Отмена</StyledButton>}</>
    </div>
  );
};
