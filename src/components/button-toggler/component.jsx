export const ButtonToggler = ({ onClick, title }) => {
  return (
    <button style={{ height: '30px' }} onClick={onClick}>
      {title}
    </button>
  );
};
