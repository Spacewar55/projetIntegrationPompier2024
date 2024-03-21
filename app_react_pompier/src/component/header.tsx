import { Button } from '@mui/material';
import '../assets/css/header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/" && (
                <header id="main-header">
                    <div id="title">
                        <img src='../../logoPompierRDL.png' alt="Logo"/>
                        <h2>Pompiers de Rivière-Du-Loup</h2>
                    </div>
                    <section>
                        <Button color="inherit" onClick={() => navigate('/accueil')}>
                            Accueil
                        </Button>
                        <Button color="inherit" onClick={() => navigate('/profil')}>
                            Profil
                        </Button>
                        <Button color="inherit" onClick={() => navigate('/commandes')}>
                            Commandes
                        </Button>
                    </section>
                    <div>
                        <Button
                            color="primary"
                            startIcon={<ShoppingBasketIcon />}
                            onClick={() => navigate('/panier')}
                        >
                        </Button>
                    </div>
                </header>
            )}
        </>
    );
}