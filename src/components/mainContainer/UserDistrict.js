import React from 'react';

const UserDistrict = ({ district }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-16">
      <div className="mt-8 ml-auto mr-auto border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            <h1>District Number: {district}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDistrict;
