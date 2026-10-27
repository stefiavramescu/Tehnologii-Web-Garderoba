import { useState } from "react";
import ItemList from "./components/ItemList.jsx";

const GARDEROBA_INITIALA = [
    { id: 1, denumire: "Camasa alba", gata: false, sezon: "Vara" },
    { id: 2, denumire: "Geaca de iarna", gata: true, sezon: "Iarna" },
    { id: 3, denumire: "Pantaloni sport", gata: false, sezon: "Toate sezoanele" }
];

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [articole, setArticole] = useState(GARDEROBA_INITIALA);
    const [tema, setTema] = useState(temaInitiala);

    function handleToggle(id) {
        setArticole((prev) =>
            prev.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t))
        );
    }

    function handleDelete(id) {
        setArticole((prev) => prev.filter((t) => t.id !== id));
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const active = articole.filter((t) => !t.gata).length;

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <h1>WardrobeManager</h1>
                <p>Organizeaza-ti hainele din garderoba pe sezoane si categorii.</p>
                <p className="app-count">
                    {articole.length} articole, dintre care {active} active
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Garderoba mea</h2>
                    <ItemList
                        articole={articole}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </section>
            </main>
        </>
    );
}