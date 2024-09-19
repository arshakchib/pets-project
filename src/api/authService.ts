import axiosInstance from './axiosConfig';
import { LoginPayload } from './types';

export const login = async (credentials: LoginPayload) => {
    try {
        const response = await axiosInstance.post('/auth/login', credentials, {
            withCredentials: true,
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const logout = async (): Promise<void> => {
    await axiosInstance.post('/auth/logout');
};
