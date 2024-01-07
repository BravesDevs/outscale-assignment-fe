import Book from "../components/Book";

const Books = () => {
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Books</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#000000] dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                Book
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Year Published
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <Book />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
