import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <input 
        className="bg-light-blue" 
        placeholder="search robots"
        onChange={searchChange}
        />
    )
}

export default SearchBox;