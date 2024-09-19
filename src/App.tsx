import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { LoginPage, MainPage } from '@/pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="login/" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;
