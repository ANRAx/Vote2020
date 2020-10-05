import React from 'react';
import SignUp from './buttonComponents/SignUp';

const Perks = () => {
  return (
    <div>
      <div className="ml-16 mt-8 max-w-sm rounded overflow-hidden shadow-lg pb-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Why Should You Sign Up?</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="text-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Perks;
