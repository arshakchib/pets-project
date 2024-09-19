import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Form, Field } from 'react-final-form';
import { LoginFormValues } from '../types';
import { loginFormConfig } from './config';

interface ILoginFormProps {
    validate: (vals: LoginFormValues) => Partial<LoginFormValues>;
    onSubmit: (vals: LoginFormValues) => void;
}

export const LoginForm = ({ onSubmit, validate }: ILoginFormProps) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="background.default"
        >
            <Box width="100%" maxWidth={400} padding={2}>
                <Typography variant="h5" gutterBottom textAlign="center">
                    Login
                </Typography>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            {loginFormConfig.map((field) => (
                                <Field key={field.name} name={field.name}>
                                    {({ input, meta }) => (
                                        <Box mb={2}>
                                            <TextField
                                                {...input}
                                                label={field.label}
                                                type={field.type}
                                                variant="outlined"
                                                fullWidth
                                                error={
                                                    meta.touched &&
                                                    Boolean(meta.error)
                                                }
                                                helperText={
                                                    meta.touched && meta.error
                                                }
                                            />
                                        </Box>
                                    )}
                                </Field>
                            ))}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={submitting}
                            >
                                Login
                            </Button>
                        </form>
                    )}
                />
            </Box>
        </Box>
    );
};
