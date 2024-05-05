import React, { useEffect, useState, useRef } from 'react';
import { fetchJobDetails } from '../utils/api/api';
import JobOpeningCard from './cards/JobOpeningCard';
import { Box } from '@mui/material';
import { LoaderComponent } from './loader/Loader';
import { setHasMore, setLoading, setjobListDetails } from '../redux/slice/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import FilterjobApplication from './FilterjobApplication';

function CandidateApplication() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const { jobList, hasMore, loading } = useSelector((state) => state.job);

    const observer = useRef();

    const fetchJobData = async () => {
        try {
            dispatch(setLoading(true));
            const { jdList, totalCount } = await fetchJobDetails({ page, limit: 10 });

            dispatch(setjobListDetails([...jobList, ...jdList]));
            dispatch(setHasMore(jobList.length < totalCount));

            setPage(prevPage => prevPage + 1);
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            console.log({ error: error.message });
        }
    };

    useEffect(() => {
        fetchJobData();
    }, [dispatch]); // Added dispatch as dependency

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
    }, [loading, hasMore, dispatch]); // Added dispatch as dependency

    console.log({ jobList });

    return (
        <Box className='job-container'>
            <FilterjobApplication />
            <Box className="cards-listing">
                {jobList.map((job) => (
                    <JobOpeningCard key={job.id} jobDetails={job} />
                ))}
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" minHeight="200px">
                    {loading && <LoaderComponent />}
                </Box>
                <div id="observer" style={{ height: '10px' }}></div>
            </Box>
        </Box>
    );
}

export default CandidateApplication;
