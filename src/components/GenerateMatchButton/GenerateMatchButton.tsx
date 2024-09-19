import React from 'react';
import { Button, Box } from '@mui/material';

interface GenerateMatchButtonProps {
    onGenerateMatch: () => void;
}

export const GenerateMatchButton = ({
    onGenerateMatch,
}: GenerateMatchButtonProps) => {
    return (
        <Box mt={4}>
            <Button
                variant="contained"
                color="primary"
                onClick={onGenerateMatch}
            >
                Generate Match
            </Button>
        </Box>
    );
};
