import ItemList from "./components/ItemList.jsx";

const garderoba = [
    { id: 1, denumire: "Camasa alba", gata: false, sezon: "Vara" },
    { id: 2, denumire: "Geaca de iarna", gata: true, sezon: "Iarna" },
    { id: 3, denumire: "Pantaloni sport", gata: false, sezon: "Toate sezoanele" }
];

export default function App() {
    const active = garderoba.filter((t) => !t.gata).length;

    return (
        <>
            <header className="app-header">
                <h1>WardrobeManager</h1>
                <p>Organizeaza-ti hainele din garderoba pe sezoane si categorii.</p>
                <p className="app-count">
                    {garderoba.length} articole, dintre care {active} active
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Garderoba mea</h2>
                    <ItemList articole={garderoba} />
                </section>
            </main>
        </>
    );
}