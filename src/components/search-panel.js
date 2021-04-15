import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to search'
    const searchStile = {
        fontSize: '25px'
    }
    return (
        <input
            style={searchStile}
            placeholder={searchText} />
    );

}

export default SearchPanel;