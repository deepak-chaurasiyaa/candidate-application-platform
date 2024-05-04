import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const JobOpeningCard = ({ company, position, location, salary, experience, responsibilities, skills, link }) => {
    return (
        <Box className="job-card">
            <Box className="card">
                <Typography className="date-posted">⏳ Posted 4 Days Ago</Typography>
                <Box className="red flex-center">
                    <Box className="company-logo">
                        <img src="https://logo.clearbit.com/sony.com" alt="Company Logo" />
                    </Box>
                    <Box></Box>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    );
};

export default JobOpeningCard;
