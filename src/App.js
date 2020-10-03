import React from 'react';
import Header from './components/Header';
import MainContainer from './components/userContainer/MainContainer';
import Perks from './components/Perks';
import Footer from './components/Footer';

/* Need to check what imports are required for context API */

const App = () => {
  return (
    <div className="App">
      <h1>Yeet</h1>
      <Header />
      <MainContainer />
      <Perks />
      <Footer />
    </div>
  );
};

export default App;
