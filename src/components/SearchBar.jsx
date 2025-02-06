import {useState} from 'react';
import './SearchBar.css'

const filters = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const SearchBar = ({searchYelp}) => {

    // Adding state to the searchbar
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    //Deals with changes in the search term
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };
    //Deals with changes of location search
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }
    //Deals with search button clicks
    const handleSearch = (event) => {
        event.preventDefault();
        searchYelp(searchTerm, location, sortBy);
    }
    //Helper function for set active sorting
    const renderSortByOptions = () => {
        return Object.keys(filters).map(option => {
            //Value corresponding to current option
            const sortByOptionValue = filters[option];
            //Setting class name to indicate active
            const className = (sortBy === sortByOptionValue) ? 'active' : '';

            return (   
                <li 
                    key={sortByOptionValue}
                    className={className}
                    onClick={() => setSortBy(sortByOptionValue)}>
                        {option}
                </li>
            );
        });
    };

    return (
        <div className="SearchBar">
            <div className="SearchFilters">
                <ul className='filterList'>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchFields">
                <input type="text" placeholder="Search restaurants" 
                    value={searchTerm} onChange={handleSearchTermChange} />
                <input type="text" placeholder="Location" 
                    value={location} onChange={handleLocationChange} />
            </div>
            <div className="SearchButton">
                <button onClick={handleSearch}>Search now!</button>
            </div>
        </div>
    );
};





export default SearchBar;