import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import Hero from './components/hero/Hero'; 
import FeaturedBusinesses from './components/featuredBusinesses/FeaturedBusinesses';
import Callout from './components/callout/Callout';
import Categories from './components/categories/Categories'; 
import CardGrid from './components/cardGrid/CardGrid';



function App() {
  const [count, setCount] = useState(0)


  // Test API call
  const testApi = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/test');
          console.log(response.data);
      } catch (error) {
          console.error('Error fetching data', error);
      }
  };

    // Call API once on component mount
    useEffect(() => {
      testApi();
    }, []);

  return (
    <MainLayout>
      <Hero />
      <FeaturedBusinesses />
      <Categories />
      <Callout />
      <CardGrid />
    </MainLayout>
  )
}

export default App
