import * as React from 'react';
import { Slider, Typography } from "@mui/material"
import Box from '@mui/material/Box';

const MIN_PRICE = 0
const MAX_PRICE = 500

export function ToyFilterRangePrice({ priceRange, setPriceRange }) {
    function handleChangeSlider(event, newRange) {
        setPriceRange(newRange)
    }

    return (
        <Box sx={{ width: 300 }}>
            <Typography id="non-linear-slider" gutterBottom>
                Price range: {priceRange[0] === -Infinity ? `$${MIN_PRICE} - $${MAX_PRICE}` : `$${priceRange[0]} - $${priceRange[1]}`}
            </Typography>
            <Slider
                value={priceRange}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                max={MAX_PRICE}
                min={MIN_PRICE}
                size="small"
            />
        </Box>)
}