import { TextField } from "@mui/material";

export function ToyFilterSearchBar({ searchValue, setSearchValue }) {

    function handleChangeSearch(ev) {
        const newValue = ev.target.value
        setSearchValue(newValue)
    }

    return (
        <div id="search">
            <TextField
                id="outlined-helperText"
                label="Search"
                sx={{ width: 300 }}
                value={searchValue}
                onChange={handleChangeSearch}
            />
        </div>
    );
}