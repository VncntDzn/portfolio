import { Box, Typography } from '@material-ui/core';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import jobs from 'data/jobs';

const Experience = (props) => {
  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='flex-start'
        width='fit-content'
        my='3rem'
      >
        <hr style={{ width: '1.2rem', border: 'thin solid #FE014E' }} />
        <Typography style={{ color: 'white' }} variant='h1'>
          &nbsp; My Experiences
        </Typography>
      </Box>
      {jobs.map((data, i) => (
        <VerticalTimeline key={i}>
          <VerticalTimelineElement
            contentStyle={{
              background: 'rgb(32, 49, 106)',
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(32, 49, 106)',
            }}
            date={data.date}
            iconStyle={{ background: 'rgb(32, 49, 106)', color: '#fff' }}
            position={data.position}
            icon={<WorkIcon />}
          >
            <Typography
              variant='h1'
              style={{ fontSize: 'clamp(1.2rem, 5vw, 1.4rem)' }}
            >
              {data.jobTitle}
            </Typography>
            <Typography
              variant='subtitle1'
              color='secondary'
              style={{ fontSize: '1rem' }}
            >
              {data.location}
            </Typography>
            <Typography variant='subtitle1' style={{ fontSize: '1.1rem' }}>
              {data.jobDescription}
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
      ))}
    </>
  );
};

export default Experience;
