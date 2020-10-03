import React from 'react';
import UserState from './UserState';
import UserDistrict from './UserDistrict';
import UserCalendar from './UserCalendar';
import RegisterVote from '../buttonComponents/RegisterVote';

const MainContainer = () => {
  return (
    <div>
      <UserState />
      <UserDistrict />
      <UserCalendar />
      <RegisterVote />
    </div>
  );
};

export default MainContainer;
