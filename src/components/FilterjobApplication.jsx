import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setjobListDetails } from '../redux/slice/jobSlice';

const FilterjobApplication = () => {
    const dispatch = useDispatch()
    const [selectedOptions, setSelectedOptions] = useState({});
    const [filterOptions, setFilterOptions] = useState({
        jobRole: [],
        minExp: [],
        maxExp: [],
        maxJdSalary: [],
        minJdSalary: [],
        location: [],
        jobMode: [], // Updated to include remote and onsite
    });

    const { jobList } = useSelector((state) => state.job);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };
    const handleOptionChange = (selected, field) => {
        setSelectedOptions(prevState => ({ ...prevState, [field]: selected }));
    
        // Filter the job list based on selected filter options
        const filteredJobs = jobList.filter(job => {
            // Check if the job matches all selected options
            return (
                (!selectedOptions.minExp || selectedOptions.minExp.length === 0 || selectedOptions.minExp.some(minExp => job.minExp === minExp.value)) &&
                (!selectedOptions.maxExp || selectedOptions.maxExp.length === 0 || selectedOptions.maxExp.some(maxExp => job.maxExp === maxExp.value)) &&
                (!selectedOptions.jobRole || selectedOptions.jobRole.length === 0 || selectedOptions.jobRole.some(jobRole => job.jobRole === jobRole.value)) &&
                (!selectedOptions.location || selectedOptions.location.length === 0 || selectedOptions.location.some(location => job.location === location.value)) &&
                (!selectedOptions.jobMode || selectedOptions.jobMode.length === 0 || selectedOptions.jobMode.some(jobMode => job.jobMode === jobMode.value)) &&
                (!selectedOptions.minJdSalary || selectedOptions.minJdSalary.length === 0 || selectedOptions.minJdSalary.some(minJdSalary => job.minJdSalary === minJdSalary.value))
            );
        });
        console.log({ filteredJobs, selectedOptions });
        // Update the job list with filtered jobs
        dispatch(setjobListDetails(filteredJobs));
    };
    

    useEffect(() => {
        if (jobList && jobList.length > 0) {
            const filteredJobList = jobList.filter(job => job.minExp !== null && job.maxExp !== null && job.maxJdSalary !== null && job.minJdSalary !== null);

            const uniqueJobRoles = [...new Set(filteredJobList.map(job => job.jobRole))];
            const uniqueMinExp = [...new Set(filteredJobList.map(job => job.minExp))];
            const uniqueMaxExp = [...new Set(filteredJobList.map(job => job.maxExp))];
            const uniqueMaxJdSalary = [...new Set(filteredJobList.map(job => job.maxJdSalary))];
            const uniqueMinJdSalary = [...new Set(filteredJobList.map(job => job.minJdSalary))];
            const uniqueLocations = [...new Set(filteredJobList.map(job => job.location))];

            const remoteLocations = uniqueLocations.filter(location => location.toLowerCase() === 'remote');
            const onSiteLocations = uniqueLocations.filter(location => location.toLowerCase() !== 'remote');

            setFilterOptions({
                jobRole: uniqueJobRoles.map(role => ({ value: role, label: role })),
                minExp: uniqueMinExp.map(exp => ({ value: exp, label: `${exp} years` })),
                maxExp: uniqueMaxExp.map(exp => ({ value: exp, label: `${exp} years` })),
                maxJdSalary: uniqueMaxJdSalary.map(salary => ({ value: salary, label: `${salary} USD` })),
                minJdSalary: uniqueMinJdSalary.map(salary => ({ value: salary, label: `${salary} USD` })),
                location: onSiteLocations.map(location => ({ value: location, label: location })), // Exclude "Remote" locations
                jobMode: [
                    { value: 'remote', label: 'Remote' },
                    { value: 'onsite', label: 'On-site' },
                ],
            });
        }
    }, [jobList]);


    return (
        <form onSubmit={handleSubmit}>
            <Box className="filter-job">
                <Box className="filter-field">
                    &nbsp;
                    {selectedOptions.minExp && selectedOptions.minExp.length > 0 && <label htmlFor="minExp">Min Experience</label>}
                    <Select
                        placeholder="Min Experience"
                        isMulti
                        onChange={(selected) => handleOptionChange(selected, 'minExp')}
                        options={filterOptions.minExp}
                        className='minExp'
                    />
                </Box>
                <Box className="filter-field">
                    &nbsp;
                    {selectedOptions.maxExp && selectedOptions.maxExp.length > 0 && <label htmlFor="maxExp">Max Experience</label>}
                    <Select
                        placeholder="Max Experience"
                        isMulti
                        onChange={(selected) => handleOptionChange(selected, 'maxExp')}
                        options={filterOptions.maxExp}
                        className='maxExp'
                    />
                </Box>
                <Box className="filter-field">
                    &nbsp;
                    {selectedOptions.jobRole && selectedOptions.jobRole.length > 0 && <label htmlFor="jobRole">Roles</label>}
                    <Select
                        placeholder="Roles"
                        isMulti
                        onChange={(selected) => handleOptionChange(selected, 'jobRole')}
                        options={filterOptions.jobRole}
                        className='jobRole'
                    />
                </Box>
                <Box className="filter-field">
                    &nbsp;
                    {selectedOptions.location && selectedOptions.location.length > 0 && <label htmlFor="location">Locations</label>}
                    <Select
                        placeholder="Locations"
                        isMulti
                        onChange={(selected) => handleOptionChange(selected, 'location')}
                        options={filterOptions.location}
                        className='location'
                    />
                </Box>
                <Box className="filter-field">
                    &nbsp;
                    {selectedOptions.jobMode && selectedOptions.jobMode.length > 0 && <label htmlFor="jobMode">Remote/on-site</label>}
                    <Select
                        isMulti
                        placeholder="Remote/on-site"
                        onChange={(selected) => handleOptionChange(selected, 'jobMode')}
                        options={filterOptions.jobMode}
                        className='jobMode'
                    />
                </Box>
                <Box className="filter-field">
                    &nbsp;
                    {selectedOptions.minJdSalary && selectedOptions.minJdSalary.length > 0 && <label htmlFor="minJdSalary">Min Base Pay</label>}
                    <Select
                        placeholder="Min Base Pay"
                        isMulti
                        onChange={(selected) => handleOptionChange(selected, 'minJdSalary')}
                        options={filterOptions.minJdSalary}
                        className='minJdSalary'
                    />
                </Box>
                <Box className="filter-field company-name-search">
                    {selectedOptions.company && selectedOptions.company.length > 0 ? <label htmlFor="company">Company Name</label> : <p>

                    </p>}
                    <input type='text' placeholder='Search Company Name' onChange={(e) => handleOptionChange(e.target.value, 'company')} />
                </Box>
            </Box>
        </form>
    );
};

export default FilterjobApplication;
