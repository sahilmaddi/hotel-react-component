import React from 'react'
import './SearchWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
const SearchWidget = ({ locations, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(locations)

        const resultsArray = locations.filter(location => locations.title.includes(e.target.value) || locations.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
      <div className="abcd ms-auto">
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            </div>
    )
}

export default SearchWidget;