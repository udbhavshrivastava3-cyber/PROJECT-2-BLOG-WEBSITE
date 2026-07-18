import React from 'react';
import { AppContext } from '../context/AppContext';

export const Pagination = () => {
  const { page, totalPages, handlePageChange } =
    React.useContext(AppContext);

  return (
    <div className="sticky bottom-0 bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex gap-3">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          )}
        </div>

        <p className="font-medium text-gray-700">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};