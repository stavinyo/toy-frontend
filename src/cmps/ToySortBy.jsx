import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export function ToySortBy({ onSortBy }) {
    const [sortBy, setSortBy] = useState('');

    function handleChangeSort(event) {
        const newSortBy = event.target.value
        setSortBy(newSortBy);
        onSortBy(newSortBy)
    };

    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    label="SortBy"
                    onChange={handleChangeSort}
                >
                    <MenuItem value="">Default Sorting</MenuItem>
                    <MenuItem value="sortByName">Sort by Name</MenuItem>
                    <MenuItem value="sortByNewest">Newest Arrivals</MenuItem>
                    <MenuItem value="sortByOldest">Oldest Items</MenuItem>
                    <MenuItem value="sortByHighPrice">High Price</MenuItem>
                    <MenuItem value="sortByLowPrice">Low Price</MenuItem>

                </Select>
            </FormControl>
        </Box >
    );
}