import ItemCard from "./ItemCard.jsx";

export default function ItemList({ articole }) {
    if (articole.length === 0) {
        return <p className="empty">Nu există niciun articol în garderobă.</p>;
    }

    return (
        <ul className="item-list">
            {articole.map((articol) => (
                <ItemCard key={articol.id} articol={articol} />
            ))}
        </ul>
    );
}