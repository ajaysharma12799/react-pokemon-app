import React from 'react'

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input
        type="search"
        className="mb-2 form-control"
        placeholder= {placeholder}
        onChange={handleChange}
        />
    )
}

export default SearchBox
