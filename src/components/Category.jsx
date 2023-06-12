import React from "react"

export const Category = ({
  categoryId,
  setCategoryId,
  categories,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="top">
      <ul className="tags">
        {categories.map((obj, index) => (
          <li
            key={obj.name}
            className={categoryId === index ? "active" : ""}
            onClick={() => setCategoryId(index)}
          >
            {obj.name}
          </li>
        ))}
      </ul>
      <input
        className="search-input"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search by name"
      />
    </div>
  )
}
