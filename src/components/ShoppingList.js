import { plantesListe } from "../datas/plantList";
import '../styles/ShoppingList.css';
import CareScale from "./CareScale";

function ShoppingList() {

// récupération des catégories

const categories = plantesListe.reduce( ( cat, plante) =>   //reduce sers à éviter les répétitions
cat.includes(plante.category) ? cat : cat.concat(plante.category),
// inclus categorie de plante | si n'existe pas ajoute la dans un tableau
[]
) ;

console.log("catégories plantes: ", categories);

    return (
    <div>

    <h3>Catégories</h3>
        {/* afficher catégories */}
                <ul>
                        {categories.map((mesCat) => (
                      <li key={mesCat}> {mesCat} </li>   
                        ))}
                </ul> 

    <h3>Plantes</h3> 
     {/* afficher liste des plantes */}
            <ul className="lmj-plant-list"> 
                {plantesListe.map((plante) => (
                    <li key={plante.id} className="lmj-plant-item" > 
                    
                {plante.name} 
                <CareScale lumiere = {plante.light} typePlante = 'lumiere' />
                <CareScale lumiere = {plante.water} typePlante = 'eau' />

                    </li>

                ))}
            </ul>

        </div>
    )
};

export default ShoppingList;