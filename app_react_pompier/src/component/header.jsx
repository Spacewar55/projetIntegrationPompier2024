import '../assets/css/header.css';
import logoPompier from '../assets/img/logoPompierRDL.png';

export default function Header(){
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoPompier} alt='logo'/>
                <h1>Pompier de Rivière-Du-Loup</h1>
            </div>
            <section>
                <a href="#">Profil</a>
            </section>
            <nav>
                <button>Panier (0)</button>
            </nav>
        </header>
    );
}