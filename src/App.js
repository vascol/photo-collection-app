import React from "react"
import { Category } from "./components/Category"
import { Collection } from "./components/Collection"
import { Pagination } from "./components/Pagination"

import "./index.scss"

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [categories, setCategories] = React.useState([])
  const [collections, setCollections] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(0)

  React.useEffect(() => {
    setIsLoading(true)
    fetch("http://photo-collection-app.vercel.app/data.json")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json.categories)
        setCollections(json.collections)
      })
      .catch((err) => {
        console.warn(err)
        alert("Error...")
      })
      .finally(() => setIsLoading(false))
  }, [categoryId])

  return (
    <div className="App">
      <h1>My photo collection</h1>
      <Category
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        categories={categories}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="content">
        {isLoading ? (
          <h2>LOADING...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              categoryId === 0
                ? obj
                : obj.category === categoryId
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
