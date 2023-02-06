
import { useState } from 'react';
import './App.css';
import MovieList from './component/Viewes/MovieList';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Routes, Route } from "react-router-dom";
import Trending from './component/Trending';
import Tv from './component/Tv';
import Movies from './component/Movies';
import Erreur from './component/Viewes/Erreur';
import Detailes from './component/Viewes/Detailes';

function App() {
  const [Text, setText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <Navbar Text={Text} setText={setText} />
        <Routes>
        <Route path="*" exact element={<Erreur/>} />
          <Route path="/" exact element={<MovieList Text={Text} />} />
          <Route path="/Movies" exact element={<MovieList Text={Text} />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/films" element={<Detailes />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
