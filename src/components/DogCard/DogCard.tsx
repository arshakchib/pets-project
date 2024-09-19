import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Dog } from '../types';

interface IDogCardProps {
    dog: Dog;
    isFavorite: boolean;
    onFavoriteToggle: (dogId: string) => void;
}

export const DogCard = ({
    dog,
    isFavorite,
    onFavoriteToggle,
}: IDogCardProps) => {
    const handleToggleFavorite = () => {
        onFavoriteToggle(dog.id);
    };

    return (
        <Box
            border={1}
            p={2}
            borderRadius={2}
            display="flex"
            flexDirection="column"
            height="100%"
            sx={{
                boxSizing: 'border-box',
                '& img': { width: '100%', height: '200px', objectFit: 'cover' },
            }}
        >
            <img src={dog.img} alt={dog.name} />
            <Typography variant="h6" mt={2}>
                {dog.name}
            </Typography>
            <Typography>Breed: {dog.breed}</Typography>
            <Typography>Age: {dog.age}</Typography>
            <Typography>Zip Code: {dog.zip_code}</Typography>
            <Button
                variant="contained"
                color={isFavorite ? 'secondary' : 'primary'}
                onClick={handleToggleFavorite}
                sx={{ mt: 2 }}
            >
                {isFavorite ? 'Unfavorite' : 'Favorite'}
            </Button>
        </Box>
    );
};
