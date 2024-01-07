import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login clicked");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="text"
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
