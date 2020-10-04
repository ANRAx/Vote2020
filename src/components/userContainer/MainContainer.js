import React from 'react';
import UserState from './UserState';
import UserDistrict from './UserDistrict';
import UserCalendar from './UserCalendar';
import RegisterVote from '../buttonComponents/RegisterVote';

const MainContainer = () => {
  return (
    <div className="relative mt-8 mb-0 border-solid border-4 border-gray-600">
      <UserState />
      <UserDistrict />
      <UserCalendar />
      <div className="mt-12 text-center">
        <RegisterVote />
      </div>
    </div>
  );
};

export default MainContainer;
