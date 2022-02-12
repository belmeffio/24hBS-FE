import './SearchBox.css'

function SearchBox(props) {

  // this function returns to the parent the text, when digited in the input
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