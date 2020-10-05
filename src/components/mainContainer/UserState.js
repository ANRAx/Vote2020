import React from 'react';

const UserState = (props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex ">
      <div className="ml-auto mr-auto border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            <h1>State: {props.state}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserState;
