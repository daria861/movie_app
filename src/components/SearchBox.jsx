const SearchBox = (props) => {

    return (
        <div className="col col-sm-4">
            <input className="form-control" placeholder="Type to search..."
                value={props.searchValue}
                onChange={(event) => props.setSearchValue(event.target.value)}
                type="text">
            </input>
        </div>
    )
}

export default SearchBox