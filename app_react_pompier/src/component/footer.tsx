import '../assets/css/footer.css';

export default function Footer(){
    return (
        <footer id="main-footer">
            <div id="title">
                <h4>Connecté en tant que :</h4>
            </div>
            <div>
                <img src='../../logoTechniqueInfo.png'/>
            </div>
            <nav>
                <a href="/">Se déconnecter</a>
            </nav>
        </footer>
    );
}