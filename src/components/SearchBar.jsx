/* eslint-disable react/prop-types */
import '../styles/SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search for a book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
