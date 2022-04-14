import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const About = () => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography sx={{fontFamily:"fantasy"}} variant='h2'>This is a CRUD App</Typography>
            <Typography variant='h3'>By MERN STACK</Typography>
        </Box>
    )
}

export default About;