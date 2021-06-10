import { useState } from 'react';
import { Box, Typography, Tabs, Tab, makeStyles } from '@material-ui/core';
import TabPanel from 'components/TabPanel';
import WebDevProjects from 'components/WebDevProjects';

const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    color: 'white',
  },
  tabContainer: {
    fontFamily: 'Raleway',
  },
}));
const Projects = (props) => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
      id="projects"
        display='flex'
        alignItems='center'
        justifyContent='flex-start'
        width='fit-content'
        my='3rem'
      >
        <hr style={{ width: '1.2rem', border: 'thin solid #FE014E' }} />
        <Typography style={{ color: 'white' }} variant='h1'>
          &nbsp; My Projects
        </Typography>
      </Box>

      <Box>
        <Tabs
          className={styles.tabsContainer}
          value={value}
          onChange={handleChange}
          textColor='inherit'
          variant='scrollable'
          scrollButtons='auto'
          TabIndicatorProps={{
            style: {
              border: 'thin solid #FE014E',
            },
          }}
        >
          <Tab className={styles.tabContainer} label='Web Dev' />
          <Tab className={styles.tabContainer} label='Mobile Dev' />
          <Tab className={styles.tabContainer} label='UI/UX Design' />
        </Tabs>

        <TabPanel value={value} index={0} style={{ width: '100%' }}>
          <WebDevProjects />
        </TabPanel>
<TabPanel value={value} index={1} style={{ width: '100%' }}>
          <Typography>Soon</Typography>
        </TabPanel>
<TabPanel value={value} index={2} style={{ width: '100%' }}>
          <Typography>Soon</Typography>
        </TabPanel>
      </Box>
    </>
  );
};

export default Projects;
