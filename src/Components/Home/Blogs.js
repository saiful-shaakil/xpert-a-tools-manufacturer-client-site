import React from "react";

const Blogs = () => {
  return (
    <div className="mx-12 mt-10">
      <h1 className="text-4xl font-semibold font-ubu text-center mb-10">
        Blogs
      </h1>
      <div>
        <p>
          <b>Question-1 :</b> What is a unit test? Why should write unit tests?
        </p>
        <p>
          <b>Answer:</b> Unit test is a software development process written and
          run by software developers to ensure that a section of an application
          (known as the "unit") meets its design and behaves as intended. In
          procedural programming, a unit could be an entire module, but it is
          more commonly an individual function or procedure.I should write unit
          tests so I can repeatedly run them and check that no bugs have been
          introduced. If unit tests are slow, I am more likely to skip running
          them on my own machines.
        </p>
      </div>
      <div className="mt-10">
        <p>
          <b>Question-2 :</b> How does prototypical inheritance work?
        </p>
        <p>
          <b>Answer:</b> Every object with its methods and properties contains
          an internal and hidden property known as [[Prototype]]. The Prototypal
          Inheritance is a feature in javascript used to add methods and
          properties in objects. It is a method by which an object can inherit
          the properties and methods of another object. Traditionally, in order
          to get and set the [[Prototype]] of an object, we use
          Object.getPrototypeOf and Object.
        </p>
      </div>
      <div className="mt-10">
        <p>
          <b>Question-3 :</b> What are the different ways to manage a state in a
          React application?
        </p>
        <p>
          <b>Answer:</b> There are four main types of state you need to properly
          manage in your React apps: <br />
          1. Local state. <br />
          2. Global state. <br />
          3. Server state. <br />
          4. URL state.
        </p>
      </div>
      <div className="mt-10">
        <p>
          <b>Question-4 :</b> How will you improve the performance of a React
          Application?
        </p>
        <p>
          <b>Answer:</b> The ways I can improve the performance of a React
          Application: <br />
          1. By avoiding inline functions as much as possible. <br />
          2. By always call multiple APIs parallelly. <br />
          3. By always render hidden components like Modals and Dropdowns
          conditionally. <br />
          4. By memoizing React components to prevent unnecessary re-renders.
        </p>
      </div>
      <div className="mt-10">
        <p>
          <b>Question-5 :</b> You have an array of products. Each product has a
          name, price, description, etc. How will you implement a search to find
          products by name?
        </p>
        <p>
          <b>Answer:</b> I can use name as a option to implement a search to
          find products. Whenever user input ther desire product name I can take
          that value by applying onChange method of React js. and by using that
          value I can filter the desire data from my products of array.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
