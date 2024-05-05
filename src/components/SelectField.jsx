import { Box, Select } from '@mui/material'
import React from 'react'

function SelectField({ className, options, onChange, label }) {
    return (
        <Box className={className} >
            <label htmlFor="jobRole">{label}</label>
            <Select
                isMulti
                // value=""
                onChange={onChange}
                options={options}
            />
        </Box>
    )
}

export default SelectField