import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TerminalIcon from '@mui/icons-material/Terminal';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: { xs: 0, md: 'auto 0'} }}
          align="right"
          variant="body2"
          color="text.secondary"
		  fontSize={{xs: '1.5rem', lg: '0.9rem'}}
        >
          December 2024 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <TerminalIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography fontSize={{ xs: '2.5rem', lg: '1.5rem'}} variant="h6" component="span">Morningstar</Typography>
          <Typography fontSize={{ xs: '2rem', lg: '1rem'}} variant="bodyBold" component="p" color='primary' gutterBottom>Software Engineer</Typography>
          <Typography fontSize={{ xs: '1.2rem', lg: '0.7rem' }} variant='small' sx={{ mt: 2 }}>Full-time • Hybrid</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
		  fontSize={{xs: '1.5rem', lg: '0.9rem'}}
        >
          May 2023 - November 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LaptopChromebookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography fontSize={{ xs: '2.5rem', lg: '1.5rem'}} variant="h6" component="span">Sciative Solutions</Typography>
          <Typography fontSize={{ xs: '2rem', lg: '1rem'}} variant="bodyBold" component="p" color='primary' gutterBottom>Jr. Software Developer</Typography>
          <Typography fontSize={{ xs: '1.2rem', lg: '0.7rem' }} variant='small' sx={{ mt: 2 }}>Full-time • On-site</Typography>
        </TimelineContent>
      </TimelineItem>

	  <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
		  fontSize={{xs: '1.5rem', lg: '0.9rem'}}
        >
          June 2021 - May 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LanguageIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography fontSize={{ xs: '2.5rem', lg: '1.5rem'}} variant="h6" component="span">Qwings</Typography>
          <Typography fontSize={{ xs: '2rem', lg: '1rem'}} variant="bodyBold" component="p" color='primary' gutterBottom>Web Developer</Typography>
          <Typography fontSize={{ xs: '1.2rem', lg: '0.7rem' }} variant='small' sx={{ mt: 2 }}>Internship • Remote</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
