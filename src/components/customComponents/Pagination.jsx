// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const range = 2;

  const generatePages = () => {
    let start = Math.max(1, currentPage - range);
    let end = Math.min(totalPages, currentPage + range);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  };

  generatePages();

  return (
    <div className="mt-4 flex items-center justify-center space-x-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        &laquo;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded border border-gray-300 px-4 py-2 hover:bg-gray-200 ${page === currentPage ? "bg-teal-600 text-white" : ""}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
