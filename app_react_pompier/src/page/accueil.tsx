import Produit from '../component/produit';
import '../assets/css/accueil.css';

export default function mainPage() {
    return (
        <div className='listeProduitCard'>
            <Produit/>
            <Produit/>
            <Produit/>
            <Produit/>
            <Produit/>
            <Produit/>
            <Produit/>
            <Produit/>
        </div>
    );
}
