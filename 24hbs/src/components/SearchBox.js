import './SearchBox.css'

function SearchBox(props) {

  const handleSearch = e => {
    props.onSearch(e.target.value);
  }

  return (
    <div className="SearchBox">
      <input type="search" placeholder="Look for a JOKE!" onChange={handleSearch}></input>
    </div>
  );
}

export default SearchBox;