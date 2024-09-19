import { FieldConfig, LoginFormValues } from '../types';

export const loginFormConfig: FieldConfig[] = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        validate: (value: string) => (value ? undefined : 'Name is required'),
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        validate: (value: string) => (value ? undefined : 'Email is required'),
    },
];

export const validateForm = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {};

    loginFormConfig.forEach((field) => {
        const error = field.validate(values[field.name]);
        if (error) {
            errors[field.name] = error;
        }
    });

    return errors;
};
