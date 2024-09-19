import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Dog } from '../types';
import { DogList } from '../DogList/DogList';
const PaginationComponent = React.lazy(
    () => import('../Pagination/Pagination')
);

interface DogListSectionProps {
    loading: boolean;
    dogs: Dog[];
    page: number;
    pageSize: number;
    totalDogs: number;
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    favorites: string[];
    onFavoriteToggle: (dogId: string) => void;
}

export const DogListSection = ({
    loading,
    dogs,
    page,
    pageSize,
    totalDogs,
    onPageChange,
    favorites,
    onFavoriteToggle,
}: DogListSectionProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: loading ? 'initial' : 'column',
            }}
        >
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <PaginationComponent
                        count={Math.ceil(totalDogs / pageSize)}
                        page={page}
                        onPageChange={onPageChange}
                    />
                    <DogList
                        dogs={dogs}
                        favorites={favorites}
                        onFavoriteToggle={onFavoriteToggle}
                    />
                    <PaginationComponent
                        count={Math.ceil(totalDogs / pageSize)}
                        page={page}
                        onPageChange={onPageChange}
                    />
                </>
            )}
        </Box>
    );
};
