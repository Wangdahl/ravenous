import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  rating: 0,
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
  rating: 0,
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
  rating: 0,
  reviewCount: 100
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Business business={business}/> {/* Perhaps for test only? */}
      <BusinessList businesses={businesses}/>
    </>
  )
}

export default App;
