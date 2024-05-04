import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ReferralRequest from '../refferal/ReferralRequest';

const JobOpeningCard = ({ company, position, location, salary, experience, responsibilities, skills, link }) => {
    const [expanded, setExpanded] = useState(false);
    const [isOverflowed, setIsOverflowed] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        // Check if descriptionRef is initialized
        if (descriptionRef.current) {
            // Check if content overflows
            const element = descriptionRef.current;
            if (element.scrollHeight > element.clientHeight) {
                setIsOverflowed(true);
            } else {
                setIsOverflowed(false);
            }
        }
    }, [expanded]);


    const toggleDescription = () => {
        setExpanded(!expanded);
    };
    return (
        <Box className="job-card">
            <Box className="card">
                <Typography className="date-posted">⏳ Posted 4 Days Ago</Typography>
                <Box className="flex spcae-between">
                    <Box className="company-logo">
                        <img className='company-logo' src="https://logo.clearbit.com/sony.com" alt="Company Logo" />
                    </Box>
                    <Box className="company-details">
                        <Box className="company-name">
                            <Typography className='company-name'>
                                Boat Private Ltd.
                            </Typography>
                            <Typography className='job-role'>
                                Software Engineer
                            </Typography>
                            <Typography className='job-location'>
                                India
                            </Typography>
                        </Box>
                    </Box>
                </Box>


                <Box className="about-company" ref={descriptionRef}>
                    <Typography>Estimated Salary: <span aria-label="Offered salary range" class=""> ₹40 - 60 LPA ✅</span></Typography>
                    <Typography variant='h6'>About Company:</Typography>
                    <Typography >About us:</Typography>
                    <Typography className='compay-description'>This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment</Typography>

                    <div className="view-more-button" onClick={toggleDescription}>View Job</div>

                </Box>
                <Box className="required-experience">
                    <Typography >Minimum Experience</Typography>
                    <Typography >2 Years</Typography>
                </Box>
                <Box className="apply-option">
                    <Button>
                        ⚡ Easy Apply
                    </Button>
                </Box>
                <ReferralRequest />
            </Box>

        </Box>
    );
};

export default JobOpeningCard;
