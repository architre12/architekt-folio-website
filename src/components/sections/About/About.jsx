import { Grid } from '@mui/material';
import theme from '../../../theme/theme';
import Layout from '../../layout/Layout';

import AboutCopy from './AboutCopy';
import Contact from './Contact';

const About = () => {
    return(
        <Layout 
            width='100%'
			backgroundColor={theme.palette.background.secondary} 
            py={14}
			px={12}
        >
            <Grid container spacing={4} sx={{ height: '100%' }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Contact />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <AboutCopy />
                </Grid>
            </Grid>
        </Layout>
    )
};

export default About;
