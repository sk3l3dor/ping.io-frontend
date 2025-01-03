import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import OTP from '../components/Otp';
import AppTheme from '../components/AppTheme';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const OTPContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function OTPPage(props) {
  const [otp, setOtp] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Entered OTP:', otp);
    // Add your OTP verification logic here
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <OTPContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Verify OTP
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>
              Enter the OTP sent to your registered mobile number
            </Typography>
            <OTP separator={<span>-</span>} value={otp} onChange={setOtp} length={4} />
            <Button type="submit" fullWidth variant="contained">
              Verify OTP
            </Button>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an account?{' '}
              <RouterLink
                to="/sign-up"
                style={{
                  textDecoration: 'none',
                  color: 'primary.main',
                }}
              >
                Sign up
              </RouterLink>
            </Typography>
          </Box>
        </Card>
      </OTPContainer>
    </AppTheme>
  );
}
