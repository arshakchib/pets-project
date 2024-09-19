import React, { useMemo } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

interface BreedFilterProps {
    breeds: string[];
    selectedBreeds: string[];
    onBreedChange: (event: SelectChangeEvent<string[]>) => void;
}

export const BreedFilter = ({
    breeds,
    selectedBreeds,
    onBreedChange,
}: BreedFilterProps) => {
    const breedOptions = useMemo(() => {
        return breeds.map((breed) => (
            <MenuItem key={breed} value={breed}>
                {breed}
            </MenuItem>
        ));
    }, [breeds]);

    return (
        <Box mb={3}>
            <FormControl sx={{ width: '240px' }}>
                <InputLabel id="breed-filter-label">Filter by Breed</InputLabel>
                <Select
                    id="breed-filter-select"
                    labelId="breed-filter-label"
                    value={selectedBreeds}
                    onChange={onBreedChange}
                    label="Filter by Breed"
                >
                    {breedOptions}
                </Select>
            </FormControl>
        </Box>
    );
};
