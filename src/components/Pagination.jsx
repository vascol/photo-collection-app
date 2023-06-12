import React from "react"

export const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <ul className="pagination">
        {[...Array(3)].map((_, i) => (
          <li
            className={currentPage === i ? "active" : ""}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </>
  )
}
