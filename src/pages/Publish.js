import { useState } from "react";

const Publish = () => {
  const [bookName, setBookName] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const authors = ["Devang M", "Sylvie C", "Vivek S"]; // Replace with your actual author data

  const handlePublish = (e) => {
    e.preventDefault();
    // Add your publishing logic here
    console.log("Publish clicked");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-white">Publish Book</h2>
        <form onSubmit={handlePublish}>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Book Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter book name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Price
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Genre
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Year
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              placeholder="Enter year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Authors
            </label>
            <select
              className="w-full border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="" disabled>
                Select an author
              </option>
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
