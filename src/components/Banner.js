//  Import CSS & Logo
import '../styles/Banner.css';

// Afficher titre & logo
function Banner({ children }) {
    return (
        <div className="lmj-banner">
            {children}
        </div>
    )
};

// export du fichier
export default Banner;