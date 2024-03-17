import '../assets/css/header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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
            <ShoppingBasketIcon/>
        </header>
    );
}