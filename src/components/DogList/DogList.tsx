import React from 'react';
import { Box } from '@mui/material';
import { Dog } from '../types';
import { DogCard } from '../DogCard/DogCard';

interface IDogListProps {
    dogs: Dog[];
    favorites: string[];
    onFavoriteToggle: (dogId: string) => void;
}

export const DogList = ({
    dogs,
    favorites,
    onFavoriteToggle,
}: IDogListProps) => {
    return (
        <Box display="flex" flexWrap="wrap" gap={2} mb={3}>
            {dogs.map((dog) => (
                <Box
                    key={dog.id}
                    flexBasis={{
                        xs: '100%',
                        sm: 'calc(50% - 16px)',
                        md: 'calc(25% - 16px)',
                    }}
                    mb={2}
                >
                    <DogCard
                        dog={dog}
                        isFavorite={favorites.includes(dog.id)}
                        onFavoriteToggle={onFavoriteToggle}
                    />
                </Box>
            ))}
        </Box>
    );
};
