import React from 'react';
import { Theme } from '~/components/GlobalStyles/theme.js';
import { Grid } from '@mui/material';

function Footer() {
    return <Grid style={{ background: Theme.colors.primary, height: '300px', marginTop: '20px' }}></Grid>;
}

export default Footer;
