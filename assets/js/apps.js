// ============ CONFIGURAZIONE SITO ============
const CONFIG = {
  siteName: "Apposta",
  siteUrl: "https://apposta.github.io", // 👈 se l'URL del tuo sito è diverso, correggi qui
  contactEmail: "tuamail@example.com",  // 👈 metti la tua email
};

// ============ LE TUE APP ============
// (le 2 qui sotto sono DEMO: quando hai le tue, sostituiscile!)
const APPS = [
  {
    id: "todo-master",
    name: "Todo Master",
    tagline: "Organizza la giornata in pochi tap",
    platforms: ["android"],
    category: "Produttività",
    version: "1.2.0",
    size: "8 MB",
    short: "Gestore di attività semplice e veloce: liste intelligenti, promemoria e funzionamento offline.",
    long: "Todo Master è il gestore di attività che rispetta il tuo tempo.\n\n✅ Liste illimitate con categorie colorate\n✅ Promemoria intelligenti\n✅ Funziona completamente offline\n✅ Interfaccia pulita, zero pubblicità",
    images: [
      "https://picsum.photos/seed/todo1/800/450",
      "https://picsum.photos/seed/todo2/800/500",
      "https://picsum.photos/seed/todo3/800/500",
      "https://picsum.photos/seed/todo4/800/500"
    ],
    video: "",
    download: "#",
    date: "2025-01-15",
    featured: true,
    faq: [
      { q: "Come si installa su Android?", a: "Scarica l'APK dal pulsante Download, apri il file e concedi il permesso di installare app da fonti sconosciute quando richiesto." },
      { q: "L'app è gratuita?", a: "Sì, completamente. Nessuna pubblicità e nessun acquisto interno." }
    ]
  },
  {
    id: "foto-compact",
    name: "Foto Compact",
    tagline: "Comprimi le foto senza perdere qualità",
    platforms: ["windows", "web"],
    category: "Utilità",
    version: "2.0.1",
    size: "14 MB",
    short: "Riduce il peso delle immagini fino al 90% mantenendo la qualità visiva.",
    long: "Foto Compact comprime le tue immagini in un attimo.\n\n✅ Formati JPG, PNG e WebP\n✅ Compressione batch\n✅ Anteprima prima/dopo",
    images: [
      "https://picsum.photos/seed/foto1/800/450",
      "https://picsum.photos/seed/foto2/800/500",
      "https://picsum.photos/seed/foto3/800/500"
    ],
    video: "",
    download: "#",
    date: "2025-02-01",
    featured: false,
    faq: [
      { q: "Funziona anche su Mac?", a: "La versione desktop è per Windows; la versione web funziona ovunque." }
    ]
  }
];
