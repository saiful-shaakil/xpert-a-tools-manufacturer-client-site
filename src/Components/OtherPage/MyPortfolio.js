import React from "react";

const MyPortfolio = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-28">
      <p>
        <span className="text-xl font-semibold">Name:</span> Saiful Islam Shakil
      </p>
      <p>
        <span className="text-xl font-semibold">Email:</span>{" "}
        saiful_shakil@yahoo.com
      </p>
      <p>
        <span className="text-xl font-semibold">Educational Instituation:</span>{" "}
        Dhaka City College
      </p>
      <p>
        <span className="text-xl font-semibold">Web Technologies I Know:</span>{" "}
        Html, CSS, JS, React JS, Node JS, MongoDb, Tailwind, Bootstrap
      </p>
      <p className="flex items-center justify-center flex-col">
        <span className="text-xl font-semibold">
          My recent 3 projects live link
        </span>{" "}
        <br />
        <a
          className="text-blue-400"
          href="https://warehouse-management-a7690.web.app/"
        >
          Project 1
        </a>{" "}
        <br />
        <a
          className="text-blue-400"
          href="https://react-todo-app-c90e7.web.app/"
        >
          Project 2
        </a>{" "}
        <br />
        <a
          className="text-blue-400"
          href="https://bookhouse-shakil.netlify.app/"
        >
          Project 3
        </a>
      </p>
    </div>
  );
};

export default MyPortfolio;
