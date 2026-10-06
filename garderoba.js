const garderoba = [
    { id: 1, denumire: "Camasa alba", gata: false, sezon: "Vara" },
    { id: 2, denumire: "Geaca de iarna", gata: true, sezon: "Iarna" },
    { id: 3, denumire: "Pantaloni sport", gata: false, sezon: "Toate sezoanele" }
];

const SEZOANE = ["Vara", "Iarna", "Toate sezoanele"];

function listeazaDenumiri(lista) {
    return lista.map((t) => t.denumire);
}

function numaraActive(lista) {
    return lista.filter((t) => !t.gata).length;
}

function cautaDupaDenumire(lista, text) {
    const cautat = text.toLowerCase();
    return lista.filter((t) => t.denumire.toLowerCase().includes(cautat));
}

function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaArticol(lista, denumire, sezon = "Vara") {
    const denumireCuratata = denumire.trim();
    if (denumireCuratata === "") {
        console.log("Eroare: Denumirea nu poate fi goala!");
        return lista;
    }
    if (!SEZOANE.includes(sezon)) {
        console.log("Eroare: Sezon invalid!");
        return lista;
    }
    const articolNou = {
        id: nextId(lista),
        denumire: denumireCuratata,
        gata: false,
        sezon: sezon
    };
    return [...lista, articolNou];
}

function comutaStare(lista, id) {
    return lista.map((t) => t.id === id ? { ...t, gata: !t.gata } : t);
}

function stergeArticol(lista, id) {
    return lista.filter((t) => t.id !== id);
}

// Testele în consolă
console.log("--- Citire ---");
console.log("Denumiri:", listeazaDenumiri(garderoba).join(", "));
console.log("Active:", numaraActive(garderoba));
console.log("Cautare 'camasa':", listeazaDenumiri(cautaDupaDenumire(garderoba, "camasa")).join(", "));

console.log("--- Adaugare ---");
let listaNoua = adaugaArticol(garderoba, "Rochie de ocazie", "Vara");
console.log("Lista noua:", listaNoua.length, "articole");
console.log("Originalul a ramas cu:", garderoba.length, "articole");

console.log("--- Modificare si stergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("Dupa bifarea id 1, active:", numaraActive(listaNoua));
listaNoua = stergeArticol(listaNoua, 3);
console.log("Dupa stergerea id 3:", listeazaDenumiri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaArticol(garderoba, "");
adaugaArticol(garderoba, "Plaja", "sezon_gresit");