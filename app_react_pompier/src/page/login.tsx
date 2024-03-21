import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../assets/css/login.css';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '50vh' }} justifyContent="center" pt={15}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
              <div className='logoLogin'>
                <img src='../../question.png'/>
              </div>
              Page de connexion
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="identifiant" 
                label="Identifiant" 
                name="identifiant"
              />
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="motDePasse" 
                label="Mot de passe" 
                name="motDePasse" 
                type="password"
              />
              <Grid container>
                <Grid item xs>
                  <Link>
                    Mot de passe oublié?
                  </Link>
                </Grid>
              </Grid>
              <Button
                onClick={() => navigate('/nouveauMdp')}
                fullWidth 
                variant="contained" 
                sx={{ mt: 3, mb: 2 }}
              >
                Connexion
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}