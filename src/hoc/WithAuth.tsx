import React, { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Here we can implement auth HOC for managing protected routes
const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const AuthHOC = (props: P) => {
        const navigate = useNavigate();
        useEffect(() => {
            // if (!accessToken) {
            //     navigate('/login');
            // }
        }, []);

        return <WrappedComponent {...props} />;
    };

    return AuthHOC;
};

export default withAuth;
