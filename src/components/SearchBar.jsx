import './SearchBar.css';

export default function SearchBar({
  searchInput,
  setSearchInput,
  placeHolder,
  disabled,
  handleSearchButton,
}) {
  const handleInput = (e) => {
    // this removes the space in the first char
    const value = e.target.value.replace(/^\s+/, '');
    setSearchInput(value);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar__bar">
        <div className="SearchBar__magnifier" />
        <input
          disabled={disabled}
          type="text"
          className="SearchBar__input"
          placeholder={placeHolder}
          value={searchInput}
          onChange={handleInput}
        />
      </div>
      <button className="SearchBar__button" onClick={handleSearchButton}>
        Search
      </button>
    </div>
  );
}
