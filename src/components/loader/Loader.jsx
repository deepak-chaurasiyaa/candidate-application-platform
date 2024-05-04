import CircularProgress from '@mui/material/CircularProgress';

export const BookLoaderComponent = () => {
    return (
        <CircularProgress
            style={{ color: '#4645F6', margin: 'auto', display: 'block' }}
            size={100}
            thickness={4}
        />
    );
};
