import React from 'react';
import { Pagination as PaginationMUI } from '@mui/material';

interface PaginationProps {
    count: number;
    page: number;
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const Pagination = ({ count, page, onPageChange }: PaginationProps) => {
    return (
        <PaginationMUI
            siblingCount={0}
            count={count}
            page={page}
            onChange={onPageChange}
            color="primary"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0px',
            }}
        />
    );
};

export default Pagination;
