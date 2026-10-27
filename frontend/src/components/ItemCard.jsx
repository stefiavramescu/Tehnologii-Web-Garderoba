const ETICHETE_SEZON = { Vara: "Vara", Iarna: "Iarna", "Toate sezoanele": "Toate sezoanele" };

export default function ItemCard({ articol }) {
    return (
        <li className={articol.gata ? "item-card done" : "item-card"}>
            <div>
                <h3>{articol.denumire}</h3>
                <span className={`badge badge-${articol.sezon.toLowerCase().replace(/\s+/g, '-')}`}>
                    {ETICHETE_SEZON[articol.sezon]}
                </span>
            </div>
            <span className="status">{articol.gata ? "Spălat" : "Activ"}</span>
        </li>
    );
}

