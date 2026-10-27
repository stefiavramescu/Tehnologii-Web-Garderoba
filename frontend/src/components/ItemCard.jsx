const ETICHETE_SEZON = { Vara: "Vara", Iarna: "Iarna", "Toate sezoanele": "Toate sezoanele" };

export default function ItemCard({ articol, onToggle, onDelete }) {
    return (
        <li className={articol.gata ? "item-card done" : "item-card"}>
            <label className="item-main">
                <input
                    type="checkbox"
                    checked={articol.gata}
                    onChange={() => onToggle(articol.id)}
                />
                <div>
                    <h3>{articol.denumire}</h3>
                    <span className={`badge badge-${articol.sezon.toLowerCase().replace(/\s+/g, '-')}`}>
                        {ETICHETE_SEZON[articol.sezon]}
                    </span>
                </div>
            </label>
            <button
                className="btn-danger"
                onClick={() => onDelete(articol.id)}
                aria-label={`Sterge ${articol.denumire}`}
            >
                Şterge
            </button>
        </li>
    );
}