import './SearchBox.css'

function SearchBox() {

  const handleSearch = e => {
    console.log(e.target.value);
  }
  return (
    <div className="SearchBox">
      <input type="search" placeholder="Look for a JOKE!" onChange={handleSearch}></input>
    </div>
  );
}

export default SearchBox;