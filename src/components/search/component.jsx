export const Search = ({ searchValue, setSearchValue }) => {
    return (
      <div>
        <span>Поиск:</span>
        <input
          value={searchValue}
          onChange={(event) => setSearchValue({ search: event.target.value })}
        />
      </div>
    );
  };
  