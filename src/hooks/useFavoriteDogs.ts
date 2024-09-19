import { useState, useCallback } from 'react';
import { matchDog } from '../api/dogService';

export const useFavoriteDogs = () => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const handleFavoriteToggle = useCallback((dogId: string) => {
        setFavorites((prev) =>
            prev.includes(dogId)
                ? prev.filter((id) => id !== dogId)
                : [...prev, dogId]
        );
    }, []);

    const handleGenerateMatch = useCallback(async () => {
        try {
            const match = await matchDog(favorites);
            console.log('Match found:', match);
        } catch (error) {
            console.error('Failed to generate match');
        }
    }, [favorites]);

    return { favorites, handleFavoriteToggle, handleGenerateMatch };
};
