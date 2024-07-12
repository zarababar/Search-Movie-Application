const SearchInput = ({ handleSearch, placeholder = '' }) => {
    return (
        <input
            type="text"
            className="form-control"
            onChange={handleSearch}
            placeholder={placeholder}
        >
        </input>
    )
}

export default SearchInput;