import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

const defaultTheme = createTheme();

export default function nouveauMDP() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Nouveau mot de passe
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              id="nouveauMdp"
              label="Nouveau mot de passe"
              name="nouveauMdp"
              sx={{ mt: 3, mb: 2 }}
            />
            <TextField
              required
              fullWidth
              id="confirmationnouveauMdp"
              label="Confirmer votre nouveau mot de passe"
              name="confirmationnouveauMdp"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 26 }}
            >
              Modifier
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}