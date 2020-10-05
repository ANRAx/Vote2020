import React from 'react';

const Footer = () => {
  return (
    <footer className="mb-0">
      <div className="flex flex-wrap w-full h-full text-center text-white bg-blue-900">
        {/* About Column */}

        <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
          <div className="my-6 ml-3 text-xl font-semibold">About Vote2020</div>
          <p className="p-3 text-gray-400">
            Due to COVID-19 each state has their own deadlines for absentee and
            in-person voting for the upcoming 2020 general election in November.
            This site aims to make it as easy as possible to find out your
            state's deadline information.
          </p>
        </div>

        {/* Contact us column */}
        <div className="w-full md:w-1/2 p-5 border-r border-blue-800">
          <div className="my-6 text-xl font-semibold">CONTACT US</div>
          <p className="mt-8 text-gray-400">
            {`Team
            GoblinSharkz`}
            {/* <a href="https://github.com/goblinsharkz" 
            <img src="..." alt="github_icon"
            width="50" height="50"
             </a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
