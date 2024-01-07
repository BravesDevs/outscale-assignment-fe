const Book = ({ book }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {book.bookName}
      </th>
      <td className="px-6 py-4">{book.bookGenre}</td>
      <td className="px-6 py-4">{book.yearPublished}</td>
      <td className="px-6 py-4">${book.bookPrice}</td>
    </tr>
  );
};

export default Book;
