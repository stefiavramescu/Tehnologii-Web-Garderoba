import { useState } from "react";
import ItemList from "./components/ItemList.jsx";

const GARDEROBA_INITIALA = [
    { id: 1, denumire: "Burgundy Long Coat", gata: false, sezon: "Winter" },
    { id: 2, denumire: "Summer Silk Shirt", gata: true, sezon: "Summer" },
    { id: 3, denumire: "Classic Black Trousers", gata: false, sezon: "All Seasons" }
];

export default function App() {
    const [articole, setArticole] = useState(GARDEROBA_INITIALA);
    const [tema, setTema] = useState("light");

    function handleToggle(id) {
        setArticole((prev) =>
            prev.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t))
        );
    }

    function handleDelete(id) {
        setArticole((prev) => prev.filter((t) => t.id !== id));
    }

    function handleTema() {
        const nouaTema = tema === "dark" ? "light" : "dark";
        setTema(nouaTema);
        document.documentElement.dataset.theme = nouaTema;
    }

    const active = articole.filter((t) => !t.gata).length;

    return (
        <div className="app-wrapper">
            {/* Header cu textură de dulap și un fascicul de lumină LED animat unic */}
            <header className="fashion-hero-header">
                <button className="theme-floating-btn" onClick={handleTema}>
                    {tema === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
                <div className="hero-content">
                    <h1>Wardrobe Manager</h1>
                    <p>Digital Closet Collection</p>
                    <div className="hero-counter-pill">
                        📦 Total items: <strong>{articole.length}</strong> &nbsp;|&nbsp; ⏳ Active (to wash): <strong>{active}</strong>
                    </div>
                </div>
            </header>

            {/* Conținutul principal */}
            <main className="fashion-main-container">
                <h2 className="section-title">
                    <span>Your Closet Collection</span>
                </h2>
                <section>
                    <ItemList
                        articole={articole}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </section>
            </main>
        </div>
    );
}