import React, { useEffect, useState, useRef } from 'react';
import { fetchJobDetails } from '../utils/api/api';
import JobOpeningCard from './cards/JobOpeningCard';
import { Box } from '@mui/material';
import { LoaderComponent } from './loader/Loader';

function CandiateApplication() {
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const fetchJobData = async () => {
        try {
            setLoading(true);
            const { jdList, totalCount } = await fetchJobDetails({ page, limit: 10 });
            setJobs(prevJobs => [...prevJobs, ...jdList]);
            setHasMore(jobs.length < totalCount);
            setPage(prevPage => prevPage + 1);
            setLoading(false);
        } catch (error) {
            console.log({ error: error.message });
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobData();
    }, []);

    useEffect(() => {
        if (!loading && hasMore) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1.0
            };

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    fetchJobData();
                }
            }, options);

            if (observer.current) {
                observer.current.observe(document.getElementById('observer'));
            }
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [loading, hasMore]);

    return (
        <Box className='job-container'>
            <Box className="cards-listing">
                {jobs.map((job, index) => (
                    <JobOpeningCard
                        key={index}
                        company={job.company}
                        position={job.position}
                        location={job.location}
                        salary={job.salary}
                        experience={job.experience}
                        responsibilities={job.responsibilities}
                        skills={job.skills}
                        link={job.link}
                    />
                ))}
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" minHeight="200px">
                    {loading && <LoaderComponent />}
                </Box>
                <div id="observer" style={{ height: '10px' }}></div>
            </Box>
        </Box>
    );
}

export default CandiateApplication;
