import { useState } from "react";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Register clicked");
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-white">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter your First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter your Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
