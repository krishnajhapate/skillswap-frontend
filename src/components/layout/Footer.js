import React from "react";

const Footer = () => {
  return (
    <footer className="body-font">
      <div className="flex flex-col items-center w-10/12 px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium title-font md:justify-start">
          <img alt="logo" src="/logo.png" className="object-contain w-12 h-6" />
          <h1 className="hidden ml-2 font-bold tracking-tight uppercase cursor-pointer  lg:block">
            <span className="text-3xl text-blue-500">Learn</span>Bloom
          </h1>
        </a>
        <p className="mt-4 text-sm text-center text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0">
          © 2023 Learn Bloom —
          Made with ❤️
          {/* <a
            href="https://github.com/mukulrajpoot262610"
            className="ml-1 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mukulrajpoot262610
          </a>{" "}
          X
          <a
            href="https://github.com/alsoamit"
            className="ml-1 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            @alsoamit
          </a> */}
        </p>

      </div>
    </footer>
  );
};

export default Footer;
