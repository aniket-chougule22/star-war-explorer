const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePreviousBtn = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextBtn = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center mt-5 gap-2">
      <button
        onClick={handlePreviousBtn}
        disabled={currentPage === 0}
        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
      >
        &laquo; Previous
      </button>

      <span className="text-md font-semibold text-yellow-100">
        Page {currentPage + 1} of {totalPages}
      </span>

      <button
        onClick={handleNextBtn}
        disabled={currentPage >= totalPages - 1}
        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;