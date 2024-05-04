import CircularProgress from '@mui/material/CircularProgress';

export const LoaderComponent = () => {
    return (
        <CircularProgress
            style={{ color: '#4645F6', margin: 'auto', display: 'block' }}
            size={50}
            thickness={4}
            animationDuration={800} // Adjust the animation duration as needed (in milliseconds)
        />
    );
};
