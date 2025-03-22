import React from 'react';

interface PaginationProps {
  page: number;
  handlePageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 transition-colors duration-200 hover:bg-blue-700"
      >
        Попередня
      </button>
      <span className="text-white">Сторінка {page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 transition-colors duration-200 hover:bg-blue-700"
      >
        Наступна
      </button>
    </div>
  );
};
