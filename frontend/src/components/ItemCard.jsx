export default function ItemCard({ articol, onToggle, onDelete }) {
    return (
        <li className={articol.gata ? "item-card done" : "item-card"}>
            <label className="item-main">
                <input
                    type="checkbox"
                    checked={articol.gata}
                    onChange={() => onToggle(articol.id)}
                />
                <div className="item-content">
                    <h3>{articol.denumire}</h3>
                    <span className="badge-season">{articol.sezon}</span>
                </div>
            </label>
            <div className="card-footer-flex">
                <span className="status-text">{articol.gata ? "✨ Spălat" : "⏳ De spălat"}</span>
                <button
                    className="btn-delete-lux"
                    onClick={() => onDelete(articol.id)}
                    aria-label={`Șterge ${articol.denumire}`}
                >
                    ✕ Șterge
                </button>
            </div>
        </li>
    );
}