import React, { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-between space-x-2 mt-[92px]">
      <button
        className="flex items-center space-x-1 text-[#4D5F6E] font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Trang trước</span>
      </button>
      <div>
        {pages.map((page, idx) => (
          <React.Fragment key={`page-${idx}`}>
            <button
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..."}
              className={`rounded-[8px] size-10 cursor-pointer ${
                currentPage === page
                  ? "bg-[#d1f7ea] text-black font-semibold"
                  : "text-[#809FB8] hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          </React.Fragment>
        ))}
      </div>

      <button
        className="flex items-center space-x-1 text-[#4D5F6E] font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>Trang kế tiếp</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
