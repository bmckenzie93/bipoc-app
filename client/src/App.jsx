import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';


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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>BIPIC FRONT END</h1>
      <Button variant="primary">react button</Button>
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
    </>
  )
}

export default App
