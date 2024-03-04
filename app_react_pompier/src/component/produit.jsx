import Img from '../assets/img/fausseImg.png';
import '../assets/css/produit.css';
export default function Produit(){
    return (
        <ul>
            <li>
                <img src={Img} alt="Article 1"/>
                <h2>Nom de l'article 1</h2>
                <p>Prix : $19.99</p>
            </li>
            <li>
                <img src={Img} alt="Article 2"/>
                <h2>Nom de l'article 2</h2>
                <p>Prix : $10.50</p>
            </li>
            <li>
                <img src={Img} alt="Article 3"/>
                <h2>Nom de l'article 3</h2>
                <p>Prix : $40.35</p>
            </li>
            <li>
                <img src={Img} alt="Article 4"/>
                <h2>Nom de l'article 4</h2>
                <p>Prix : $8.00</p>
            </li>
            <li>
                <img src={Img} alt="Article 5"/>
                <h2>Nom de l'article 5</h2>
                <p>Prix : $29.99</p>
            </li>
            <li>
                <img src={Img} alt="Article 6"/>
                <h2>Nom de l'article 6</h2>
                <p>Prix : $29.99</p>
            </li>
        </ul>
    );
}