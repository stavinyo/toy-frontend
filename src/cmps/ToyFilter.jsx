import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToyFilterRangePrice } from './ToyFilterRangePrice';
import { ToyFilterAvailable } from './ToyFilterAvailable';
import { ToyFilterLabels } from './ToyFilterLabels';
import { ToyFilterSearchBar } from './ToyFilterSearchBar';
import { ToySortBy } from './ToySortBy';

export function ToyFilter({ onFilterBy, onSortBy }) {
    const [labelName, setLabelName] = useState([])
    const [selectedAvailability, setSelectedAvailability] = useState('All items')
    const [priceRange, setPriceRange] = useState([-Infinity, Infinity])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        onFilterBy(labelName, selectedAvailability, priceRange, searchValue)
    }, [labelName, selectedAvailability, priceRange, searchValue])

    return (
        <div className='filters-container'>

            <ToySortBy
                onSortBy={onSortBy} />

            <ToyFilterSearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <ToyFilterLabels
                labelName={labelName}
                setLabelName={setLabelName}
            />

            <ToyFilterAvailable
                selectedAvailability={selectedAvailability}
                setSelectedAvailability={setSelectedAvailability}
            />

            <ToyFilterRangePrice
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
        </div>
    )
}



