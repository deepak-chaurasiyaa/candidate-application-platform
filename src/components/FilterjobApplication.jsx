import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

const FilterjobApplication = () => {
    const dispatch = useDispatch();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [attributeData, setAttributeData] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleOptionChange = (selected) => {
        setSelectedOptions(selected);
    };

    const getLabel = (option) => option.name;
    const getValue = (option) => option.id;

    const getCatagory = async () => {
        try {
            const data = {
                data: [
                    {
                        id: 1,
                        name: 'CAS Number',
                        attribute_type: 1,
                        type: 'API',
                    },
                    {
                        id: 2,
                        name: 'Chemical Formula',
                        attribute_type: 1,
                        type: 'API',
                    },
                    {
                        id: 3,
                        name: 'Molecular Weight',
                        attribute_type: 1,
                        type: 'API',
                    },
                    {
                        id: 4,
                        name: 'Acidity',
                        attribute_type: 1,
                    },
                    {
                        id: 5,
                        name: 'Purity',
                        attribute_type: 1,
                    },
                    {
                        id: 6,
                        name: 'IUPAC Name',
                        attribute_type: 1,
                    },
                    {
                        id: 7,
                        name: 'Shelf Lif',
                        attribute_type: 1,
                    },
                    {
                        id: 8,
                        name: 'Refractive Index',
                        attribute_type: 1,
                    },
                    {
                        id: 9,
                        name: 'Molecular Formula',
                        attribute_type: 1,
                    },
                    {
                        id: 10,
                        name: 'Usage',
                        attribute_type: 1,
                    },
                    {
                        id: 11,
                        name: 'Form',
                        attribute_type: 1,
                    },
                    {
                        id: 12,
                        name: 'Viscocity',
                        attribute_type: 1,
                    },
                    {
                        id: 13,
                        name: 'Color',
                        attribute_type: 1,
                    },
                    {
                        id: 14,
                        name: 'Composition',
                        attribute_type: 1,
                    },
                    {
                        id: 15,
                        name: 'Molar Mass',
                        attribute_type: 1,
                    },
                    {
                        id: 16,
                        name: 'Flash Point',
                        attribute_type: 1,
                    },
                    {
                        id: 17,
                        name: 'Physical State',
                        attribute_type: 1,
                    },
                    {
                        id: 18,
                        name: 'Melting Point',
                        attribute_type: 1,
                    },
                    {
                        id: 19,
                        name: 'Chemical Name',
                        attribute_type: 1,
                    },
                    {
                        id: 20,
                        name: 'Ignition Temprature',
                        attribute_type: 1,
                    },
                    {
                        id: 21,
                        name: 'Solubility',
                        attribute_type: 1,
                    },
                    {
                        id: 22,
                        name: 'Boiling Point',
                        attribute_type: 1,
                        type: 'Solvents',
                    },
                    {
                        id: 23,
                        name: 'Odour',
                        attribute_type: 1,
                        type: 'Solvents',
                    },
                    {
                        id: 24,
                        name: 'Surface Tension',
                        attribute_type: 1,
                        type: 'Solvents',
                    },
                    {
                        id: 25,
                        name: 'Hazards',
                        attribute_type: 1,
                    },
                    {
                        id: 26,
                        name: 'Precautions',
                        attribute_type: 1,
                    },
                    {
                        id: 27,
                        name: 'Evaporations Point',
                        attribute_type: 1,
                    },
                    {
                        id: 28,
                        name: 'Metalic Impurities',
                        attribute_type: 1,
                    },
                    {
                        id: 29,
                        name: 'Decomposition Point',
                        attribute_type: 1,
                        type: 'KSM',
                    },
                    {
                        id: 30,
                        name: 'Apperance',
                        attribute_type: 1,
                        type: 'KSM',
                    },
                    {
                        id: 31,
                        name: 'Non-Volatile Matter',
                        attribute_type: 1,
                        type: 'KSM',
                    },
                    {
                        id: 32,
                        name: 'Organic Impurities',
                        attribute_type: 1,
                    },
                    {
                        id: 33,
                        name: 'Iodized Chloride',
                        attribute_type: 1,
                    },
                    {
                        id: 34,
                        name: 'pharmacopoeia standard',
                        attribute_type: 1,
                    },
                ]
            };
            setAttributeData([...data.data]);
            // setAttributeData([allOption, ...data]);
        } catch (error) {
            console.log({ error });
        }
    };
    useEffect(() => {

    }, [attributeData]);

    useEffect(() => {
        getCatagory();
    }, []);

    // Handle the selection and deselection of "Select All" option
    useEffect(() => {
        if (
            selectedOptions.length > 0 &&
            selectedOptions[selectedOptions.length - 1].id === -1
        ) {
        }
    }, [selectedOptions]);

    return (
        <form onSubmit={handleSubmit}>
            <p className='formHead'>
                <span>Roles</span>
            </p>
            <Box className="flex">
                <Select
                    isMulti
                    value=""
                    onChange={handleOptionChange}
                    options={attributeData}
                    getOptionLabel={getLabel}
                    getOptionValue={getValue}
                    className='CustommultiSelect'
                />
                <p className='formHead'>
                    <span>Roles</span>
                </p>
                <Select
                    isMulti
                    // value={productAttribute}
                    onChange={handleOptionChange}
                    options={attributeData}
                    getOptionLabel={getLabel}
                    getOptionValue={getValue}
                    className='CustommultiSelect'
                />
                <Select
                    isMulti
                    // value={productAttribute}
                    onChange={handleOptionChange}
                    options={attributeData}
                    getOptionLabel={getLabel}
                    getOptionValue={getValue}
                    className='CustommultiSelect'
                />
                <Select
                    isMulti
                    // value={productAttribute}
                    onChange={handleOptionChange}
                    options={attributeData}
                    getOptionLabel={getLabel}
                    getOptionValue={getValue}
                    className='CustommultiSelect'
                />
                <Select
                    isMulti
                    // value={productAttribute}
                    onChange={handleOptionChange}
                    options={attributeData}
                    getOptionLabel={getLabel}
                    getOptionValue={getValue}
                    className='CustommultiSelect'
                />
            </Box>

            {/* <Button type='submit' variant='contained'>
        Submit
      </Button> */}
        </form>
    );
};

export default FilterjobApplication;
