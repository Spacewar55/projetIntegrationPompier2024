import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import '../assets/css/produit.css'
import Produit from '../component/produit';

export default function DetailProduit() {

  const [quantite, setQuantite] = React.useState('');
  const [taille, setTaille] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setQuantite(event.target.value as string);
    setTaille(event.target.value as string);
  };

  return (
    <div className='produit'>
      <div className='firstColonneProduit'>
        <Produit/>
      </div>
      <div className='secondColonneProduit'>
        <Box
          height={200}
          width={200}
          my={4}
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <Typography>Coût en point :</Typography>
          <Typography>En stock</Typography>

          <div className='quantitePanier'>
            <InputLabel id="quantiteLabel">Quantité :</InputLabel>
            <Select
              labelId="quantiteLabel"
              id="quantite"
              label="Quantité"
              value={quantite}
              onChange={handleChange}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
          </div>
          
          <div className='taillePanier'>
            <InputLabel id="tailleLabel">Taille :</InputLabel>
            <Select
              labelId="tailleLabel"
              id="taille"
              label="Taille"
              value={taille}
              onChange={handleChange}>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"XL"}>XL</MenuItem>
                <MenuItem value={"XXL"}>XXL</MenuItem>
                <MenuItem value={"XXXL"}>XXXL</MenuItem>
            </Select>
          </div>
        </Box>
        <Button variant="contained">Ajouter au panier</Button>
      </div>
    </div>
  );
}