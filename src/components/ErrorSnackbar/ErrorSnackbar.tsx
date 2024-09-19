import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useSnackbar } from '@/hooks';

export const ErrorSnackbar = () => {
    const { error, openSnackbar, handleCloseSnackbar } = useSnackbar();

    return (
        <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
        >
            <Alert onClose={handleCloseSnackbar} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
};
