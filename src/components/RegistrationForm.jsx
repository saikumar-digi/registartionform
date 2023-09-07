import React, { useState } from 'react';

const RegistrationForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    password: '',
    address: '',
    status: '',
  });

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      phoneNumber: '',
      password: '',
      address: '',
      status: '',
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div class="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="dateOfBirth" className="text-gray-700">Date of Birth</label>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      
        <div class="col-span-2">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-gray-700">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={user.status}
            onChange={handleChangeInput}
            className="mt-1 block w-full py-2 px-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
