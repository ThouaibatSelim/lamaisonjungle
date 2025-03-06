//  Import CSS & Logo
import '../styles/Banner.css';
import logo from '../assets/logo.png';

let titre = "La maison jungle";
// Afficher titre & logo
function Banner() {
    return <div className="lmj-banner">
        <img src={logo} alt='La maison jungle logo' className='lmj-logo'/>
        <h1 className='lmg-title'>{titre.toUpperCase()}</h1>
        </div>
    
};

// export du fichier
export default Banner;