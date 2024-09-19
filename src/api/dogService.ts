import axiosInstance from './axiosConfig';
import { Dog, SearchDogsParams } from './types';

export const getBreeds = async (): Promise<string[]> => {
    const response = await axiosInstance.get('/dogs/breeds');
    return response.data;
};

export const searchDogs = async (
    params: SearchDogsParams
): Promise<{ resultIds: string[]; total: number }> => {
    const response = await axiosInstance.get('/dogs/search', { params });
    return response.data;
};

export const getDogsByIds = async (dogIds: string[]): Promise<Dog[]> => {
    const response = await axiosInstance.post('/dogs', dogIds);
    return response.data;
};

export const matchDog = async (
    dogIds: string[]
): Promise<{ match: string }> => {
    const response = await axiosInstance.post('/dogs/match', dogIds);
    return response.data;
};
