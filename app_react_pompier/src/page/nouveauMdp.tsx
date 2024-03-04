import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function newMDP() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '50vh' }} justifyContent="center" pt={15}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              Nouveau mot de passe
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField 
                margin="normal" 
                required fullWidth 
                id="nouveaumotDePasse" 
                label="Nouveau mot de passe" 
                name="nouveaumotDePasse" 
                type="password"
              />
              <TextField 
                margin="normal" 
                required 
                fullWidth 
                id="confirmationmotDePasse" 
                label="Confirmer le nouveau mot de passe" 
                name="confirmationmotDePasse" 
                type="password"
              />
              <Button type="submit" href="/accueil" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Confirmer
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}