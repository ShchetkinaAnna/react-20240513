import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clear } from '../../redux/ui/cart';
import { selectCartCount } from '../../redux/ui/cart/selectors';

import { CartIndicator } from './component';
import styles from './styles.module.css';

export const CartIndicatorContainer = () => {
  const count = useSelector(selectCartCount);

  const dispatch = useDispatch();

  const handleClearClick = useCallback(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <div className={styles.cart_indicator_container}>
      <CartIndicator count={count} onClearClick={handleClearClick} />
    </div>
  );
};
