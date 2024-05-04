import React from 'react';
import { Route, Routes } from 'react-router-dom';


const CandiateApplication = React.lazy(() =>
    import('../components/CandiateApplication.jsx')
);

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<CandiateApplication />} />
        </Routes>
    );
}

export { Routing };
