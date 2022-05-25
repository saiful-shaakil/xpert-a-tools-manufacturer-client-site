import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import LoadingPage from "../Shared/LoadingPage";

const UpdateMyProfile = () => {
  const { register, handleSubmit } = useForm();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  const onSubmit = (data) => {
    const info = {
      name: data.name,
      instituation: data.instituation,
      mobile: data.phone,
      linkedIn: data.linkedIn,
      address: data.address,
      city: data.city,
      zip: data.zip,
    };
  };
  return (
    <div>
      <div className="mx-10 mt-7 font-ubu text-2xl">
        <h1>Update Your Profile Information:</h1>
      </div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  required
                  {...register("firstname")}
                  placeholder="First name"
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  required
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Education Instituation Name
                </label>
                <input
                  id="instituation"
                  required
                  type="text"
                  {...register("instituation")}
                  placeholder=""
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  required
                  {...register("city")}
                  placeholder=""
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  State / Province
                </label>
                <input
                  id="state"
                  required
                  {...register("state")}
                  type="text"
                  placeholder=""
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  required
                  {...register("zip")}
                  type="text"
                  placeholder=""
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  LinkedIn Account
                </label>
                <input
                  id="linkedIn"
                  required
                  type="text"
                  {...register("linkedIn")}
                  placeholder="LinkedIn Account Link"
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Phone Number
                </label>
                <input
                  id="phone"
                  required
                  type="text"
                  {...register("phone")}
                  placeholder="+880"
                  className="w-full border-2 py-1 px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              {/* <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md dark:border-gray-100"
                  >
                    Change
                  </button>
                </div>
              </div> */}
            </div>
            <input
              className="w-24 ml-72 btn btn-primary"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateMyProfile;
