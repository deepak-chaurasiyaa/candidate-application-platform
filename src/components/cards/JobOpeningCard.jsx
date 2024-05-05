import React, { useRef } from 'react';
import { Typography, Button, Box } from '@mui/material';
import ReferralRequest from '../refferal/ReferralRequest';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const JobOpeningCard = ({ jobDetails }) => {
    const navigate = useNavigate()

    const handleEasyApply = () => {
        // Check if jobDetails.jdLink exists before navigating
        if (jobDetails.jdLink) {
            window.open(jobDetails.jdLink, '_blank');
        } 
    };

    const descriptionRef = useRef(null);
    return (
        <Box className="job-card" key={jobDetails.jdUid}>
            <Box className="card">
                <Typography className="date-posted">⏳ Posted 4 Days Ago</Typography>
                <Box className="flex spcae-between">
                    <Box className="company-logo">
                        <img className='company-logo' src={jobDetails.logoUrl} alt="Company Logo" />
                    </Box>
                    <Box className="company-details">
                        <Box className="company-name">
                            <Typography className='company-name'>
                                {jobDetails.companyName}
                            </Typography>
                            <Typography className='job-role'>
                                {jobDetails.jobRole}
                            </Typography>
                            <Typography className='job-location'>
                                {jobDetails.location}
                            </Typography>
                        </Box>
                    </Box>
                </Box>


                <Box className="about-company" ref={descriptionRef}>
                    <Typography>Estimated Salary: <span aria-label="Offered salary range" class=""> {jobDetails.salaryCurrencyCode} {jobDetails.minJdSalary} - {jobDetails.maxJdSalary} LPA ✅</span></Typography>
                    <Typography variant='h6'>About Company:</Typography>
                    <Typography >About us:</Typography>
                    <Typography className='compay-description'>{jobDetails.jobDetailsFromCompany}</Typography>

                    <div className="view-more-button"><Link target='#' to={jobDetails.jdLink}>View Job</Link></div>

                </Box>
                <Box className="required-experience">
                    <Typography >Minimum Experience</Typography>
                    <Typography >{jobDetails.minExp} Years</Typography>
                </Box>
                <Box className="apply-option">
                    <Button onClick={handleEasyApply}>
                        ⚡ Easy Apply
                    </Button>
                </Box>
                <ReferralRequest />
            </Box>

        </Box>
    );
};

export default JobOpeningCard;
