import { useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { getBreeds } from '../api/dogService';

export const useBreeds = () => {
    const [breeds, setBreeds] = useState<string[]>([]);
    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const breedList = await getBreeds();
                setBreeds(breedList);
            } catch (error) {
                console.error('Failed to fetch breeds');
            }
        };
        fetchBreeds();
    }, []);

    const handleBreedChange = (event: SelectChangeEvent<string[]>) => {
        setSelectedBreeds(event.target.value as string[]);
    };

    return { breeds, selectedBreeds, handleBreedChange };
};
