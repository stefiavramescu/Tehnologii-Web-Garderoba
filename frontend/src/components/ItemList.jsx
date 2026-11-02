import ItemCard from "./ItemCard.jsx";

export default function ItemList({ articole, onToggle, onDelete }) {
    if (articole.length === 0) {
        return <p className="empty-drawer">Nu există articole în această secțiune momentan.</p>;
    }

    return (
        <ul className="item-list">
            {articole.map((articol) => (
                <ItemCard
                    key={articol.id}
                    articol={articol}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}