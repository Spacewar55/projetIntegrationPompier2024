import { Button } from '@mui/material';
import '../assets/css/header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const handleClick = () => {
    window.location.href = '/panier';
};

export default function Header(){
    return (
        <header id="main-header">
            <div id="title">
                <img src='../../logoPompierRDL.png'/>
                <h2>Pompiers de Rivière-Du-Loup</h2>
            </div>
            <section>
                <a href="/accueil">Accueil</a>
                <a href="/profil">Profil</a>
                <a href="/commandes">Commandes</a>
            </section>
            <div>
                <Button
                    color="primary"
                    startIcon={<ShoppingBasketIcon />}
                    onClick={handleClick}
                >
                </Button>
            </div>
        </header>
    );
}