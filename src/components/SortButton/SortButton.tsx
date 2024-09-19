import React from 'react';
import { Button } from '@mui/material';
import { SortOrder } from '../types';

interface SortButtonProps {
    sortOrder: SortOrder;
    toggleSortOrder: () => void;
}

export const SortButton = ({ sortOrder, toggleSortOrder }: SortButtonProps) => {
    return (
        <Button variant="outlined" onClick={toggleSortOrder} sx={{ mb: 3 }}>
            Sort by Breed:{' '}
            {sortOrder === SortOrder.Ascending ? 'Ascending' : 'Descending'}
        </Button>
    );
};
