import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import Box from '@mui/material/Box';

export function ToyFilterAvailable({ selectedAvailability, setSelectedAvailability }) {
    function handleStockBoxChange(ev) {
        setSelectedAvailability(ev.target.value)
    }
    return (
        <Box sx={{ width: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Available</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedAvailability}
                    label="Availability"
                    onChange={handleStockBoxChange}
                >
                    <MenuItem value={'All items'}>All items</MenuItem>
                    <MenuItem value={'Available'}>Available now</MenuItem>
                    <MenuItem value={'notAvailable'}>Out off stock</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}