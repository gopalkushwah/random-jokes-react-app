import './App.css';
import { useState } from 'react';
function App() {
  const [result, setResults] = useState('');
  // SoHzhQbBxv_zXCZy0oGOnaGqCq-YkXoQbsOuRNXcYFI

  const fetchImage = () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=celebrity`)
      .then(res => res.json())
      .then(data => {
        console.log(data.value);
        setResults(data.value);
      })
  }
  return (
    <div className="App">

      <div className='jokesbox'>
        <p>{result}</p>
      </div>

      <div className='btn'>
        <button onClick={fetchImage}>Search</button>
      </div>
    </div>
  );
}

export default App;