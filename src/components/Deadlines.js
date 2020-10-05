import React from 'react';

// const Deadlines = ({ inPersonDeadline, mailInDeadline, onlineDeadline }) => {
const Deadlines = (props) => {
  const { inPersonDeadline, mailInDeadline, onlineDeadline } = props.deadline;
  return (
    <div className="mt-16">
      <div className="ml-16 mt-20 max-w-sm rounded overflow-hidden shadow-lg pb-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">Deadlines</div>
          <ul>
            <li className="inPersonDeadline">{inPersonDeadline}</li>
            <br />
            <hr />
            <br />
            <li className="mailDeadline">{mailInDeadline}</li>
            <br />
            <hr />
            <br />
            <li className="onlineDeadline">{onlineDeadline}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Deadlines;
