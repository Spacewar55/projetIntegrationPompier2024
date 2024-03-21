import * as React from 'react';
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material';
import Produit from '../component/produit'
import '../assets/css/panier.css';

export default function Panier() {

  return (
    <div className='panier'>
      <div className='firstColonnePanier'>
        <Produit/>
        <Produit/>
      </div>
      <div className='secondColonnePanier'>
        <Box
          height={200}
          width={300}
          my={4}
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <Typography>Total :</Typography>
          <Typography>Nombre de point restant :</Typography>
          <Button variant="contained" color='success' className='btnValider'>Valider la commande</Button>
          <Button variant="outlined" color='error' className='btnVider'>Vider le panier</Button>
        </Box>
      </div>
    </div>
  );
}