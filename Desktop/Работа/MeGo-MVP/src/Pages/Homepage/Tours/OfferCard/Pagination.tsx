import React from "react";
import './Pagination.css'

interface PaginationProps {
    totalCards: number;
    currentPerPage: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
    blockSize?: number;
    visiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
    totalCards,
    currentPerPage,
    setCurrentPage,
    currentPage,
    blockSize = 10,
    visiblePages = 3,
}) => {
    const totalPages = Math.ceil(totalCards / currentPerPage);

    const blockStart = Math.floor((currentPage - 1) / blockSize) * blockSize + 1;
    const blockEnd = Math.min(blockStart + blockSize - 1, totalPages);

    let startPage = blockStart;
    let endPage = Math.min(startPage + visiblePages - 1, blockEnd - 1);

    if (currentPage > endPage) {
        startPage = currentPage - visiblePages + 1;
        endPage = currentPage;
    }

    const pages: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="main-pagination">
            <svg className="pag-svg" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M5.85414 10.1465C5.9006 10.193 5.93745 10.2481 5.96259 10.3088C5.98773 10.3695 6.00067 10.4346 6.00067 10.5003C6.00067 10.566 5.98773 10.631 5.96259 10.6917C5.93745 10.7524 5.9006 10.8076 5.85414 10.854C5.80769 10.9005 5.75254 10.9373 5.69184 10.9625C5.63115 10.9876 5.56609 11.0006 5.50039 11.0006C5.4347 11.0006 5.36964 10.9876 5.30895 10.9625C5.24825 10.9373 5.1931 10.9005 5.14664 10.854L0.146643 5.85403C0.100155 5.80759 0.0632757 5.75245 0.0381136 5.69175C0.0129514 5.63105 0 5.56599 0 5.50028C0 5.43457 0.0129514 5.36951 0.0381136 5.30881C0.0632757 5.24811 0.100155 5.19296 0.146643 5.14653L5.14664 0.146528C5.24046 0.0527077 5.36771 -2.61548e-09 5.50039 0C5.63308 2.61548e-09 5.76032 0.0527077 5.85414 0.146528C5.94796 0.240348 6.00067 0.367596 6.00067 0.500278C6.00067 0.63296 5.94796 0.760208 5.85414 0.854028L1.20727 5.50028L5.85414 10.1465Z" fill="#111111" />
            </svg>
            <div className="pagination">

                {blockStart < startPage && (
                    <>
                        <button onClick={() => setCurrentPage(blockStart)}>
                            {blockStart}
                        </button>
                        {startPage - blockStart > 1 && <span>...</span>}
                    </>
                )}

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? "active" : ""}
                    >
                        {page}
                    </button>
                ))}

                {endPage < blockEnd && <span>...</span>}
                {blockEnd !== pages[pages.length - 1] && (
                    <button
                        onClick={() => setCurrentPage(blockEnd)}
                        className={currentPage === blockEnd ? "active" : ""}
                    >
                        {blockEnd}
                    </button>
                )}
            </div>
            <svg className="pag-svg" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M0.146345 10.1465C0.0998898 10.193 0.0630398 10.2481 0.0378985 10.3088C0.0127573 10.3695 -0.000183582 10.4346 -0.000183582 10.5003C-0.000183582 10.566 0.0127573 10.631 0.0378985 10.6917C0.0630398 10.7524 0.0998898 10.8076 0.146345 10.854C0.1928 10.9005 0.24795 10.9373 0.308647 10.9625C0.369343 10.9876 0.434397 11.0006 0.500095 11.0006C0.565793 11.0006 0.630847 10.9876 0.691543 10.9625C0.75224 10.9373 0.80739 10.9005 0.853845 10.854L5.85385 5.85403C5.90033 5.80759 5.93721 5.75245 5.96237 5.69175C5.98754 5.63105 6.00049 5.56599 6.00049 5.50028C6.00049 5.43457 5.98754 5.36951 5.96237 5.30881C5.93721 5.24811 5.90033 5.19296 5.85385 5.14653L0.853845 0.146528C0.760025 0.0527077 0.632777 -2.61548e-09 0.500095 0C0.367413 2.61548e-09 0.240165 0.0527077 0.146345 0.146528C0.0525246 0.240348 -0.000183582 0.367596 -0.000183582 0.500278C-0.000183582 0.63296 0.0525246 0.760208 0.146345 0.854028L4.79322 5.50028L0.146345 10.1465Z" fill="#111111" />
            </svg>
        </div>
    );
};

export default Pagination;
