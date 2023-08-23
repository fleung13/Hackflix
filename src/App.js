// App.js

// Pseudocodes
// Set up .ENV file to store our API key
// Set up _Redirects file
// Create component to hold our initial Axios call in a useEffect
// Store our API Data in STATE
// LOOP over the data and display a movie poster on the page

// Use the LINK to make our POSTERS change the URL on CLICK
// Use ROUTES to LISTEN for the URL change and DISPLAY the appropiate comnponent

import Catalogue from './components/Catalogue';
import MovieDetails from './components/MovieDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Hackflix!</h1>

      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/movie/:movieID" element={ <MovieDetails />} />
      </Routes>
      
    </>
  );
}

export default App;
