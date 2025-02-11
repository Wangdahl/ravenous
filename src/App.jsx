import './App.css'

import BusinessList from './components/BusinessList.jsx'
import SearchBar from './components/SearchBar.jsx'
import Yelp from './utils/yelp.js'
import {useState} from 'react'


function App() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false); //Setting up a state for loading

  const searchYelp = (searchTerm, location, sortBy) => {
    setLoading(true); // Start loading
    Yelp.search(searchTerm, location, sortBy).then(businesses => {
      console.log('Businesses:', businesses);
      setBusinesses(businesses || []);
      setLoading(false); //Stop loading
    }).catch(error => {
      console.error(error);
      setLoading(false); // Stop loading if error occurs
    });
  }

  return (
    <div className='appMainDiv'>
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <section className='searchBanner'>
          <h2>Find your new favorite restaurant</h2>
          <SearchBar searchYelp={searchYelp} />
        </section>
        <section className='displayArea'>
        {loading ? (
            <div className="loadingIndicator"></div>
          ) : (
            <BusinessList businesses={businesses} />
          )}
        </section>
      </main>
    </div>
  )
}

export default App;


/* For testing single business layout
import Business from './components/Business.jsx'
    <Business business={business}/> 
*/