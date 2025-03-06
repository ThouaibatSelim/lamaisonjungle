function CareScale(props) {
    const lumiere = props.lumiere;
    const typePlante = props.typePlante;

    // Echelle de niveau de besoin
    const nbEscalier = [1, 2, 3];

    const typeBesoin = typePlante === 'lumiere' ? 'Lumière': 'Eau' // ? : = if else
   
    return (
        <div>
            {nbEscalier.map((marcheEscalier) => (
            lumiere >= marcheEscalier ? <span key={nbEscalier.toString()}>{typeBesoin}</span> : null
            ))}
        </div>
    )
};

export default CareScale;