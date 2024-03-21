import { Button } from '@mui/material';
import '../assets/css/footer.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer(){
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/" && (
            <footer id="main-footer">
                <div id="title">
                    <h4>Connecté en tant que :</h4>
                </div>
                <div>
                    <img src='../../logoTechniqueInfo.png'/>
                </div>
                <Button color="inherit" onClick={() => navigate('/')}>
                    Se déconecter
                </Button>
            </footer>
            )}
        </>
    );
}