import React from 'react';
import { useTitle } from '@/hooks';
import { LoginForm } from '@/components/index';
import { LoginFormValues } from '@/components/types';
import { login } from '@/api/authService';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    useTitle('Login | Auth Page');

    const navigate = useNavigate();

    const onSubmit = async (values: LoginFormValues) => {
        try {
            await login(values);
            navigate('/main');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const validate = (values: LoginFormValues) => {
        const errors: Partial<LoginFormValues> = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        return errors;
    };

    return <LoginForm validate={validate} onSubmit={onSubmit} />;
};
