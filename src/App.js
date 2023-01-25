
import { useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  const [Text, setText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <Navbar Text={Text} setText={setText}/>
        <MovieList Text={Text}/>
        
      </header>
    </div>
  );
}

export default App;
