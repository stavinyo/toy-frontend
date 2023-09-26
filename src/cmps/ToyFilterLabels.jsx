import * as React from 'react';
import { toyService } from "../services/toy.service"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function ToyFilterLabels({ labelName, setLabelName }) {

    const labelsOpts = toyService.getLabels()
    function handleChangeLabels(ev, newValue) {
        setLabelName(newValue)
    }

    return (
        <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={labelsOpts}
            getOptionLabel={(option) => option}
            value={labelName}
            onChange={handleChangeLabels}
            renderInput={(params) => (
                <TextField {...params} label="Labels" placeholder="Select labels" />
            )}
            sx={{ width: '300px' }}
        />
    );
}