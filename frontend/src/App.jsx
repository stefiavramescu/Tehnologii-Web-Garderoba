import { useEffect, useState } from "react";
import ItemList from "./components/ItemList.jsx";
import { fetchTasks } from "./api.js";

export default function App() {
    const [articole, setArticole] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState("light");

    // Preluare date la montarea componentei
    useEffect(() => {
        let ignore = false;
        async function load() {
            try {
                const data = await fetchTasks();
                if (!ignore) setArticole(data);
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        load();
        return () => {
            ignore = true;
        };
    }, []);

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

            <main className="fashion-main-container">
                <h2 className="section-title">
                    <span>Your Closet Collection</span>
                </h2>

                {loading && <p className="info">Se încarcă...</p>}

                {error && (
                    <p className="error">
                        Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
                    </p>
                )}

                {!loading && !error && (
                    <section>
                        <ItemList
                            articole={articole}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    </section>
                )}
            </main>
        </div>
    );
}