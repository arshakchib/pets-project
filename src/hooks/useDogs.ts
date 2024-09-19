import { useState, useEffect, useCallback } from 'react';
import { Dog, SortOrder } from '../components';
import { getDogsByIds, searchDogs } from '../api/dogService';

export const useDogs = (selectedBreeds: string[]) => {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [page, setPage] = useState(1);
    const [totalDogs, setTotalDogs] = useState(0);
    const [loading, setLoading] = useState(false);
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Ascending);
    const pageSize = 10;

    useEffect(() => {
        const fetchDogs = async () => {
            setLoading(true);
            try {
                const params = {
                    breeds: selectedBreeds,
                    size: pageSize,
                    from: (page - 1) * pageSize,
                    sort: `breed:${sortOrder}`,
                };
                const { resultIds, total } = await searchDogs(params);
                const dogList = await getDogsByIds(resultIds);
                setDogs(dogList);
                setTotalDogs(total);
            } catch (error) {
                console.error('Failed to fetch dogs');
            } finally {
                setLoading(false);
            }
        };
        fetchDogs();
    }, [selectedBreeds, page, sortOrder]);

    const handlePageChange = useCallback(
        (_event: React.ChangeEvent<unknown>, value: number) => setPage(value),
        []
    );
    const toggleSortOrder = useCallback(
        () =>
            setSortOrder((prevOrder) =>
                prevOrder === SortOrder.Ascending
                    ? SortOrder.Descending
                    : SortOrder.Ascending
            ),
        []
    );

    return {
        dogs,
        loading,
        totalDogs,
        page,
        sortOrder,
        handlePageChange,
        toggleSortOrder,
    };
};
