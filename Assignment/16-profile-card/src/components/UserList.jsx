import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        const usersWithFormData = data.users.map((user) => ({
          ...user,
          formData: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
          },
        }));
        setUsers(usersWithFormData);
      });
  }, []);

  const handleChange = (e, userId) => {
    const { name, value } = e.target;
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              formData: {
                ...user.formData,
                [name]: value,
              },
            }
          : user
      )
    );
  };

  if (!users.length) return <p className="text-center text-xl py-8">Loading users...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">User Profile Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-2xl border border-gray-200"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-24 h-24 rounded-full border-4 border-blue-300 shadow mb-3"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="mt-4 space-y-3">
              <InputField
                name="firstName"
                value={user.formData.firstName}
                onChange={(e) => handleChange(e, user.id)}
                placeholder="First Name"
              />
              <InputField
                name="lastName"
                value={user.formData.lastName}
                onChange={(e) => handleChange(e, user.id)}
                placeholder="Last Name"
              />
              <InputField
                name="email"
                value={user.formData.email}
                onChange={(e) => handleChange(e, user.id)}
                placeholder="Email"
              />
              <InputField
                name="phone"
                value={user.formData.phone}
                onChange={(e) => handleChange(e, user.id)}
                placeholder="Phone"
              />
            </div>

            <div className="mt-6 border-t pt-3 text-sm text-left text-gray-600">
              <strong className="block text-gray-800 mb-1">Live Preview:</strong>
              <p>
                {user.formData.firstName} {user.formData.lastName}
              </p>
              <p>{user.formData.email}</p>
              <p>{user.formData.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Input Field as a reusable component
const InputField = ({ name, value, onChange, placeholder }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  />
);

export default UserList;
