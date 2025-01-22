import './App.css'
import Business from './components/Business.jsx'
import BusinessList from './components/BusinessList.jsx'
import SearchBar from './components/SearchBar.jsx'

const business = {
  imageSrc: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Placeholder restaurant',
  address: 'Random street 21',
  city: 'Randomtown',
  state: 'Ohio',
  zipCode: '420420',
  category: 'Italian',
  rating: 0,
  reviewCount: 100
};

const businesses = [
  {
  imageSrc: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Placeholder restaurant',
  address: 'Random street 21',
  city: 'Randomtown',
  state: 'Ohio',
  zipCode: '420420',
  category: 'Italian',
  rating: 5,
  reviewCount: 100
  },
  {
  imageSrc: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Dudes place',
  address: 'Dudes street 21',
  city: 'Dudestown',
  state: 'Ohio',
  zipCode: '420420',
  category: 'Burgers',
  rating: 4,
  reviewCount: 100
  },
  {
  imageSrc: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Fancy restaurant',
  address: 'Fancy street 21',
  city: 'Fancyville',
  state: 'Ohio',
  zipCode: '420420',
  category: 'Fine dining',
  rating: 3,
  reviewCount: 100
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Placeholder restaurant',
    address: 'Random street 21',
    city: 'Randomtown',
    state: 'Ohio',
    zipCode: '420420',
    category: 'Italian',
    rating: 5,
    reviewCount: 100
    },
    {
    imageSrc: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Dudes place',
    address: 'Dudes street 21',
    city: 'Dudestown',
    state: 'Ohio',
    zipCode: '420420',
    category: 'Burgers',
    rating: 4,
    reviewCount: 100
    },
    {
    imageSrc: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Fancy restaurant',
    address: 'Fancy street 21',
    city: 'Fancyville',
    state: 'Ohio',
    zipCode: '420420',
    category: 'Fine dining',
    rating: 3,
    reviewCount: 100
    }
];

function App() {

  return (
    <div className='appMainDiv'>
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <section className='searchBanner'>
          <h2>Find your new favorite restaurant</h2>
          <SearchBar />
        </section>
        <section className='displayArea'>
        {/* <Business business={business}/> For testing single business layout */}
        <BusinessList businesses={businesses}/>
        </section>
      </main>
    </div>
  )
}

export default App;
