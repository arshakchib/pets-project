import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
    GenerateMatchButton,
    ErrorSnackbar,
    MainContentMemoized,
} from '@/components';
import { useFavoriteDogs, useTitle } from '@/hooks';
import { logout } from '@/api/authService';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
    useTitle('Main Page | Dogs');
    const { favorites, handleFavoriteToggle, handleGenerateMatch } =
        useFavoriteDogs();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <Box
            maxWidth={1200}
            sx={{ margin: '0 auto', display: 'block', padding: '40px' }}
        >
            <Box
                component="header"
                mb={6}
                display="flex"
                justifyContent="space-between"
            >
                <Typography variant="h4">Dog Search</Typography>
                <Button
                    sx={{ background: 'transparent', padding: '0px' }}
                    onClick={handleLogout}
                >
                    Log out
                </Button>
            </Box>

            <MainContentMemoized
                handleFavoriteToggle={handleFavoriteToggle}
                favorites={favorites}
            />

            {favorites.length > 0 && (
                <GenerateMatchButton onGenerateMatch={handleGenerateMatch} />
            )}

            <ErrorSnackbar />
        </Box>
    );
};
