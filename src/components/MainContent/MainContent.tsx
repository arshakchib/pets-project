import React from 'react';
import { SortButton } from '../SortButton/SortButton';
import { DogListSection } from '../DogListSection/DogListSection';
import { useBreeds, useDogs } from '@/hooks';
import { BreedFilter } from '../BreedFilter/BreedFilter';
import { Box } from '@mui/material';

const PAGE_SIZE = 10;

interface IMainContent {
    handleFavoriteToggle: (dogId: string) => void;
    favorites: string[];
}

const MainContent = ({ handleFavoriteToggle, favorites }: IMainContent) => {
    const { breeds, selectedBreeds, handleBreedChange } = useBreeds();
    const {
        dogs,
        loading,
        totalDogs,
        page,
        sortOrder,
        handlePageChange,
        toggleSortOrder,
    } = useDogs(selectedBreeds);
    return (
        <Box maxWidth={1200} sx={{ margin: '0 auto' }}>
            <SortButton
                sortOrder={sortOrder}
                toggleSortOrder={toggleSortOrder}
            />
            <BreedFilter
                breeds={breeds}
                selectedBreeds={selectedBreeds}
                onBreedChange={handleBreedChange}
            />
            <DogListSection
                pageSize={PAGE_SIZE}
                loading={loading}
                dogs={dogs}
                page={page}
                totalDogs={totalDogs}
                onPageChange={handlePageChange}
                favorites={favorites}
                onFavoriteToggle={handleFavoriteToggle}
            />
        </Box>
    );
};

export const MainContentMemoized = React.memo(MainContent);
