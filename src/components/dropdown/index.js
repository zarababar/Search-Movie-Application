const DropDown = ({ handleDropDownClick }) => {
    return (
        <select onChange={handleDropDownClick} className="form-select select-type mx-3" >
            <option value="" selected>All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
        </select>

    )
}
export default DropDown;