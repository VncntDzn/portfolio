import { useState } from 'react';
import {
  Grid,
  Typography,
  Card,
  Box,
  Toolbar,
  Button,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import CustomPagination from 'components/CustomPagination';
import webProjects from 'data/webProjects';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      margin: '0 10rem',
      alignSelf: 'center',
    },
  },
  cardContainer: {
    backgroundColor: '#20316A',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1rem',
    margin: '1rem',
    borderRadius: '10px',
    [theme.breakpoints.up('sm')]: {
      width: '17rem',
    },
  },
  imageContainer: {
    objectFit: 'contain',
    height: '10rem',
    padding: '1.3rem',
    alignSelf: 'center',
  },
  buttonStyle: {
    fontFamily: 'Raleway',
    '&:hover': {
      color: '#FE014E',
    },
  },
}));
const WebDevProjects = (props) => {
  const styles = useStyles();
  const [currentPage, setCurrentPage] = useState(0);

  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  let pageCount = webProjects?.length / 3;

  return (
    <Grid>
      <Box className={styles.container}>
        {webProjects?.length &&
          webProjects.slice(offset, offset + PER_PAGE).map((data, i) => (
            <Card className={styles.cardContainer} key={i}>
              <Box
                pt={2}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography
                  variant='subtitle1'
                  style={{ color: 'white', fontSize: '1rem' }}
                >
                  {data.name}
                </Typography>
                <Typography className={styles.buttonStyle} color='secondary'>
                  View Project
                </Typography>
              </Box>

              <img
                className={styles.imageContainer}
                src={data.image}
                alt={data.name}
              />
            </Card>
          ))}
        <Box display='flex' justifyContent='center' minWidth={1}>
          <CustomPagination pageCount={pageCount} onPageChange={onPageChange} />
        </Box>
      </Box>
    </Grid>
  );
};

WebDevProjects.propTypes = {};

export default WebDevProjects;
