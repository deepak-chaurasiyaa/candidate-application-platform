import { Button, Grid, Avatar, Typography } from '@mui/material';

const ReferralRequest = () => {
    return (
        <Button className="ask-for-referral" variant="contained" sx={{ width: '100%', backgroundColor: 'rgb(73, 67, 218)', fontWeight: 500,marginTop:1 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <img src="https://media.licdn.com/dms/image/D4D03AQGsnnp5ILUfcg/profile-displayphoto-shrink_800_800/0/1699863812498?e=1715212800&amp;v=beta&amp;t=N7vgqonNZXRi3NW9qhAV3CNU8Aa8h3HS5jXtKDtFYvE" alt="Avatar" />
                    </Avatar>
                </Grid>
                <Grid item>
                    <Typography variant="body1" sx={{ textTransform: 'none' }}>
                        Ask for referral
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    );
};

export default ReferralRequest;
