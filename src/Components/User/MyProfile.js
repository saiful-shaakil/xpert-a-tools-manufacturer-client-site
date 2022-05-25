import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import LoadingPage from "../Shared/LoadingPage";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="mx-10 pt-36">
      <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50">
        <div className="w-full pt-1 text-center -mt-16 mx-auto">
          <a href="#" className="block relative">
            <img
              alt="profil"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-20 w-20 "
            />
          </a>
        </div>
        <div className="w-full">
          <div className="text-center mb-6">
            <p className="text-gray-800 dark:text-white text-xl font-medium">
              {user.displayName}
            </p>
            <p className="text-gray-400 text-xs">{user.email}</p>
          </div>
          <div className="rounded-lg bg-pink-100 dark:bg-white p-2 w-full mb-4">
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
              <p className="flex flex-col">
                Bought:
                <span className="text-black dark:text-indigo-500 font-bold">
                  00
                </span>
              </p>
              <p className="flex flex-col">
                Ordered:
                <span className="text-black dark:text-indigo-500 font-bold">
                  00
                </span>
              </p>
              <p className="flex flex-col">
                Rat.
                <span className="text-black dark:text-indigo-500 font-bold">
                  0.0
                </span>
              </p>
            </div>
          </div>
          <Link
            to="/dashboard"
            type="button"
            className="py-2 px-4 btn btn-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
