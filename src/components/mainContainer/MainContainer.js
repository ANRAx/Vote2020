import React from 'react';
import UserState from './UserState';
import UserDistrict from './UserDistrict';
import UserCalendar from './UserCalendar';
import RegisterVote from '../buttonComponents/RegisterVote';
import { useStore } from '../../userContext';

const { default: Axios } = require('axios');
// connect to the backend
// the [] at the end of our fetch does the fetch once
const MainContainer = () => {
  const { voteInfo } = useStore();

  return (
    <div className="relative mt-8 mb-24 border-4 border-gray-200 border-opacity-50 border-solid rounded ">
      <UserState state={voteInfo[0].state} />
      <UserDistrict district={voteInfo[0].districtNumber} />
      <UserCalendar />
      <div className="mt-12 text-center">
        <RegisterVote />
      </div>
    </div>
  );
};

export default MainContainer;
