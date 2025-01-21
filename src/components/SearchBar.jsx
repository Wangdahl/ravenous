

const SearchBar = () => (
    <div className="SearchBar">
        <div className="SearchFilters">
            <ul>
                {renderSortByOptions}
            </ul>
        </div>
        <div className="SearchFields">
            <input type="text" placeholder="Search restaurants"/>
            <input type="text" placeholder="Location"/>
        </div>
        <div className="SearchButton">
            <button>Search now!</button>
        </div>
    </div>
);

const filters = {
    'Best match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const renderSortByOptions = () => (
    Object.keys(filters).map(option => (
        <li key={filters[option]}>
            {option}
        </li>
    ))
);

export default SearchBar;