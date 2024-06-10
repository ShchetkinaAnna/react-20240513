import { StyledButton } from '../styled-button/component';

export const AuthorizationForm = ({ userName, cancel, login, onChange }) => {
  return (
    <div>
      <input
        type="text"
        size="40"
        value={userName}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <StyledButton disabled={userName === ''} onClick={login}>
        Войти
      </StyledButton>
      <StyledButton onClick={cancel}>Отмена</StyledButton>
    </div>
  );
};
