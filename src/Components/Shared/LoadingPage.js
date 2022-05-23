import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  );
};

export default LoadingPage;
