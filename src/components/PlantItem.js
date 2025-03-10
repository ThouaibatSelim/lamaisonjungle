import CareScale from "./CareScale";

function PlantItem( {name, id, water, light}) {
return(
    <li className="lmj-plant-item" >
       <img className="lmj-plant-item-cover" src="" alt={`${name}`} />
        {name}

        <div>
        <CareScale typeBesoin={water} />
        <CareScale typeBesoin={light} />
        </div>
    </li>
)
};

export default PlantItem;