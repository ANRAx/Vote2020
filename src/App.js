import React, { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import MainContainer from './components/mainContainer/MainContainer';
import Perks from './components/Perks';
import Footer from './components/Footer';
import Deadlines from './components/Deadlines';
import { VoteContext } from './userContext';
const { default: Axios } = require('axios');

/* Need to check what imports are required for context API */

const App = () => {
  const [voteInfo, setVoteInfo] = useState([
    {
      state: 'Loading state',
      districtNumber: 'Loading district',
      inPersonDeadline: 'loading',
      mailInDeadline: 'loading',
      onlineDeadline: 'loading',
    },
  ]);
  // voteInfo[0] ? voteInfo[0] : spinningWheel

  useEffect(() => {
    Axios('/api/voteinfo').then((res) => {
      setVoteInfo([res.data]);
    });
  }, []);

  return (
    <VoteContext.Provider value={{ voteInfo, setVoteInfo }}>
      <div className="App">
        <Header />
        <div className="flex justify-center">
          <MainContainer />
          <div>
            <Perks />
            <Deadlines deadline={voteInfo[0]} />
          </div>
        </div>
        <Footer />
      </div>
    </VoteContext.Provider>
  );
};

export default App;
