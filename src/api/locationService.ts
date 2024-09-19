import axiosInstance from './axiosConfig';
import { SearchLocationsParams } from './types';

export const getLocationsByZipCodes = async (
    zipCodes: string[]
): Promise<Location[]> => {
    const response = await axiosInstance.post('/locations', zipCodes);
    return response.data;
};

export const searchLocations = async (
    params: SearchLocationsParams
): Promise<{ results: Location[]; total: number }> => {
    const response = await axiosInstance.post('/locations/search', params);
    return response.data;
};
