import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex w-full z-50 absolute m-auto h-screen items-center justify-center md:w-[25%]">
        <div className="loader m-auto">
          <div className="door"></div>
          <div className="door right"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
