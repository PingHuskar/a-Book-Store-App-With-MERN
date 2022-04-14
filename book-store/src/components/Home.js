import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Button LinkComponent={NavLink} to='/books' sx={{marginTop:15,backgroundColor:'orangered'}} variant='contained'>
                    <Typography variant='h3'>
                        View All Books
                    </Typography>
                </Button>
               
            </Box>
        </div>
    )
}

export default Home;