import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const handleClick = () => {
  window.location.href = '/produit';
};

export default function Produit() {
  return (
    <Card sx={{ m:3 }} className='cardProduit' onClick={handleClick}>
      <CardActionArea className='cardActionProduit'>
        <CardMedia
          component="img"
          src='../../fausseImg.png'
          height={200}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nom du Produit
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nombre de point du produit
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}