import React, { useEffect } from 'react'
import { fetchJobDetails } from '../utils/api/api'
import JobOpeningCard from './cards/JobOpeningCard'
import { Box } from '@mui/material'

function CandiateApplication() {

    const fetchJobData = async () => {
        try {
            const { jdList } = await fetchJobDetails({ page: 1, limit: 10 })
            console.log({ jdList })
        } catch (error) {
            console.log({ error: error.message })
        }
    }

    useEffect(() => {
        fetchJobData()
    }, [])

    return (
        <Box className='job-container'>
            <Box className="cards-listing">
                <JobOpeningCard />
                <JobOpeningCard />
                <JobOpeningCard />
                <JobOpeningCard />
                <JobOpeningCard />
                <JobOpeningCard />
                <JobOpeningCard />
                <JobOpeningCard />
                <JobOpeningCard />
            </Box>
        </Box>
    )
}

export default CandiateApplication