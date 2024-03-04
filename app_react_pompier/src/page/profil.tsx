import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../component/header';
import Footer from '../component/footer';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function profil() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
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
              Votre profil
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="nom" 
                label="Nom" 
                name="nom"
              />
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="prenom" 
                label="Prénom" 
                name="prenom" 
              />
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="adresse" 
                label="Adresse" 
                name="adresse" 
              />
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="ville" 
                label="Ville" 
                name="ville" 
              />
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="province" 
                label="Province" 
                name="province" 
              />
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
                label="Mot de Passe" 
                name="motDePasse" 
              />
              <Button 
                type="submit" 
                href="/nouveauMdp" 
                fullWidth 
                variant="contained" 
                sx={{ mt: 3, mb: 2 }}
              >
                Modifier le profil
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </ThemeProvider>
  );
}