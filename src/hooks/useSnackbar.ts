import { useState, useCallback } from 'react';

export const useSnackbar = () => {
    const [error, setError] = useState<string | null>(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = useCallback(() => {
        setOpenSnackbar(false);
    }, []);

    return {
        error,
        openSnackbar,
        setError,
        setOpenSnackbar,
        handleCloseSnackbar,
    };
};
