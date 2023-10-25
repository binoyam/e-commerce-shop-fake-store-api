import './SearchResult.css'
function SearchResult({ searchResults, searchTerm }) {
  console.log(searchResults);
  return (
    <div className="search-result-page">
      <h1>You searched for {searchTerm}</h1>
    </div>
  );
}

export default SearchResult;
