import { Box, Grid, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = (props) => {
  return (
    <Grid>
      <hr style={{ width: '100%' }} />
      <Box display='flex' alignItems='center' justifyContent='center'>
        <IconButton style={{ color: 'red' }}>
          <FavoriteIcon />
        </IconButton>
        <Typography variant='subtitle1' style={{ color: 'white' }}>
          Created by Vincent Dizon
        </Typography>
      </Box>
    </Grid>
  );
};

Footer.propTypes = {};

export default Footer;
