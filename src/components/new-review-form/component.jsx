import { useReducer } from 'react';

import { Rating } from '../rating/component';

const SET_REVIEW_AUTHOR = 'SET_REVIEW_AUTHOR';
const SET_REVIEW_TEXT = 'SET_REVIEW_TEXT';
const SET_REVIEW_RATING = 'SET_REVIEW_RATING';
const RESET_FORM = 'RESET_FORM';

const DEFAULT_FORM_VALUE = {
  author: '',
  text: '',
  rating: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_REVIEW_AUTHOR:
      return { ...state, author: action.payload };
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

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <div>
        <span>Имя:</span>
        <input
          type="text"
          value={form.author}
          onChange={(event) => dispatch({ type: SET_REVIEW_AUTHOR, payload: event.target.value })}
        />
      </div>
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
      <button onClick={() => dispatch({ type: RESET_FORM })}>Сохранить</button>
    </div>
  );
};
