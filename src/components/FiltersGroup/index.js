import './index.css'
import {IoSearchOutline} from 'react-icons/io5'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    ratingChangeby,
    categoryChangeby,
    searchInputFilter,
    clearAllFilters,
  } = props

  const onClickRating = ratingId => {
    ratingChangeby(ratingId)
  }
  const onClickCategory = categoryId => {
    categoryChangeby(categoryId)
  }
  const onChangeInput = event => {
    if (event.key === 'Enter') {
      searchInputFilter(event.target.value)
    }
  }

  const clearFilter = () => {
    clearAllFilters()
  }
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          onKeyPress={onChangeInput}
          placeholder="Search"
          type="search"
          className="search-el"
        />
        <IoSearchOutline />
      </div>
      <h1 className="category-heading">Category</h1>
      <div className="category-list">
        {categoryOptions.map(category => {
          const {categoryId, name} = category
          return (
            <p
              className="category-list-item"
              onClick={() => onClickCategory(categoryId)}
              key={categoryId}
            >
              {name}
            </p>
          )
        })}
      </div>
      <h1 className="category-heading">Rating</h1>
      <div>
        {ratingsList.map(rating => {
          const {ratingId, imageUrl} = rating
          return (
            <div
              onClick={() => onClickRating(ratingId)}
              key={ratingId}
              className="rating-el"
            >
              <img
                className="rating-img"
                src={imageUrl}
                alt={`rating ${ratingId}`}
              />
              <p className="rating-paragraph">& up</p>
            </div>
          )
        })}
      </div>
      <button onClick={clearFilter} className="clear-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
