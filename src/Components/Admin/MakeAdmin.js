import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  const makeAdmin = (id, name) => {
    fetch(`http://localhost:5000/update-user/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success(`${name} is a Admin now.`);
        }
      });
  };
  return (
    <div className="overflow-x-auto mt-10 mx-10">
      <h1 className="font-ubu font-semibold text-primary text-3xl mb-10">
        All User:
      </h1>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((each, index) => (
            <tr key={each._id}>
              <th>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={each.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </th>
              <td>{each.name}</td>
              <td>{each.mail}</td>
              <td>{each.role === "User" ? "User" : "Admin"}</td>
              <td className="px-5 py-5  bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-red-900">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">
                    <button
                      htmlFor="delete-product-form-modal"
                      onClick={() => makeAdmin(each._id, each.name)}
                      className="cursor-pointer"
                    >
                      Make Admin
                    </button>
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
