// ───────────────────────────────────────────────────────────────────
// CRÉATIONS VISUELLES — Sélection de projets design & vidéo.
//
// TYPES :
//   - "image"   : une seule image (thumbnail + source)
//   - "gallery" : document multi-pages (thumbnail + pages[])
//   - "video"   : vidéo MP4 ou YouTube/Vimeo (thumbnail + videoUrl + videoType)
//
// Les fichiers sont stockés dans `public/creations/`.
// ───────────────────────────────────────────────────────────────────

// Helper pour générer les pages d'un portfolio multi-pages
const phdPortfolioPages = Array.from({ length: 16 }, (_, i) =>
  `/creations/phd-portfolio-${String(i + 1).padStart(2, "0")}.jpg`
);

const creations = [
  // ─── PHOTOSHOP ──────────────────────────────────────────────────
  {
    id: "ps-eglise",
    title: "L'Heure de Prière — Vases d'Honneur",
    category: "photoshop",
    type: "image",
    thumbnail: "/creations/eglise-vases-honneur.png",
    source: "/creations/eglise-vases-honneur.png",
    description:
      "Affiche promotionnelle pour le rendez-vous hebdomadaire « Heure de Prière » de l'Assemblée Amour de Christ (Église Vases d'Honneur M'Pouto). Composition photo avec colorimétrie duotone bleu/violet, typographie hiérarchisée en trois niveaux, intégration des logos partenaires et CTA encadré pour l'horaire.",
    tools: ["Photoshop"],
    year: "2024",
  },
  {
    id: "ps-worship-birthday",
    title: "Worship Birthday — Établie ton règne",
    category: "photoshop",
    type: "image",
    thumbnail: "/creations/worship-birthday.png",
    source: "/creations/worship-birthday.png",
    description:
      "Flyer événementiel pour un concert de louange anniversaire. Détourage manuel de deux portraits en noir et blanc, effet de papier déchiré, contraste visuel fort entre le bleu pétrole et le jaune. Hiérarchie claire : titre, thème, date/lieu et dress code.",
    tools: ["Photoshop"],
    year: "2025",
  },
  {
    id: "ps-kakemono-namaby",
    title: "Kakemono — Centre Médical Namaby",
    category: "photoshop",
    type: "image",
    thumbnail: "/creations/centre-medical-namaby.jpg",
    source: "/creations/centre-medical-namaby.jpg",
    description:
      "Kakemono promotionnel format vertical pour le Centre Médical Namaby (Yopougon, Abidjan). Composition avec photo médecin détourée, motif de vagues corporate bleu/teal, icônes circulaires pour les quatre services (Gynécologie, Cardiologie, Ophtalmologie, Médecine Générale) et QR code vers le site web.",
    tools: ["Photoshop"],
    year: "2024",
  },

  // ─── CANVA ──────────────────────────────────────────────────────
  {
    id: "cv-women-festival",
    title: "Women Festival Days — Identité visuelle",
    category: "canva",
    type: "image",
    thumbnail: "/creations/women-festival-days.png",
    source: "/creations/women-festival-days.png",
    description:
      "Logotype et identité pour l'événement « Women Festival Days ». Création d'une mascotte florale géométrique en 4 pétales, palette rose magenta / jaune pâle / blanc, typographie sans-serif bold en deux niveaux hiérarchiques pour évoquer énergie et féminité.",
    tools: ["Canva"],
    year: "2024",
  },
  // {
  //   id: "cv-shopping-noel",
  //   title: "Shopping de Noël — Flyer personal shopper",
  //   category: "canva",
  //   type: "image",
  //   thumbnail: "/creations/shopping-noel.png",
  //   source: "/creations/shopping-noel.png",
  //   description:
  //     "Flyer promotionnel pour un service de personal shopping de Noël à distance depuis la France. Composition dynamique avec collage des logos de marques partenaires (Primark, H&M, Zara, Bershka, Smyths, JouéClub), palette festive rouge/blanc et décoration saisonnière.",
  //   tools: ["Canva"],
  //   year: "2024",
  // },
  {
    id: "cv-perfect-home",
    title: "Perfect Home & Design — Flyer services",
    category: "canva",
    type: "image",
    thumbnail: "/creations/perfect-home-design.png",
    source: "/creations/perfect-home-design.png",
    description:
      "Flyer A4 pour une entreprise d'aménagement intérieur et extérieur basée à Abidjan Riviera. Mise en page structurée avec logo, photo lifestyle, liste des services à checklist et section « À propos ». Identité orange/gris cohérente et infos de contact en pied de page.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: "cv-phd-flyer",
    title: "Perfect Home & Design — Flyer Architecture d'Intérieur",
    category: "canva",
    type: "gallery",
    thumbnail: "/creations/phd-flyer-1.jpg",
    pages: [
      "/creations/phd-flyer-1.jpg",
      "/creations/phd-flyer-2.jpg",
      "/creations/phd-flyer-3.jpg",
    ],
    description:
      "Flyer bilingue (FR / EN) pour Perfect Home & Design présentant l'offre d'architecture d'intérieur. Couverture au design vertical avec typographie en lettres découpées, page services détaillée et version anglaise pour la clientèle internationale. Identité orange/gris cohérente avec le reste de la marque.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: "cv-phd-portfolio",
    title: "Perfect Home & Design — Portfolio Architecture",
    category: "canva",
    type: "gallery",
    thumbnail: "/creations/phd-portfolio-01.jpg",
    pages: phdPortfolioPages,
    description:
      "Portfolio complet 16 pages pour Perfect Home & Design, destiné à présenter l'entreprise aux clients prospects. Structure éditoriale : sommaire, présentation de la CEO, à propos, services détaillés et 3 études de projets (confection de mobilier sur-mesure, aménagement paysager, peinture murale) avec photos avant/après. Layout minimaliste noir et blanc rehaussé de touches orange.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: "cv-alonzzy-infographic",
    title: "Alonzzy — Infographie Comment ça marche",
    category: "canva",
    type: "image",
    thumbnail: "/creations/alonzzy-infographic.png",
    source: "/creations/alonzzy-infographic.png",
    description:
      "Infographie UX pour Alonzzy, plateforme ivoirienne de covoiturage longue distance. Présentation du parcours utilisateur en deux scénarios parallèles (conducteur / passager), étapes numérotées et hiérarchie visuelle claire respectant la charte teal/jaune.",
    tools: ["Canva"],
    year: "2024",
  },
  {
    id: "cv-alonzzy-brochure",
    title: "Alonzzy — Brochure 3 volets",
    category: "canva",
    type: "image",
    thumbnail: "/creations/alonzzy-brochure.png",
    source: "/creations/alonzzy-brochure.png",
    description:
      "Brochure tri-volets imprimable pour Alonzzy. Trois zones équilibrées : présentation de la marque, mockup app mobile avec infos de contact, et bénéfices utilisateur. Layout respectant la charte graphique teal / jaune et forte lisibilité à l'impression.",
    tools: ["Canva"],
    year: "2024",
  },

  // ─── VIDÉO ──────────────────────────────────────────────────────
  {
    id: "vd-alonzzy-pitch",
    title: "Alonzzy — Pitch Deck animé",
    category: "video",
    type: "video",
    thumbnail: "/creations/alonzzy-pitch-deck-thumb.jpg",
    videoUrl: "/creations/alonzzy-pitch-deck.mp4",
    videoType: "mp4",
    description:
      "Vidéo pitch deck animée pour présenter Alonzzy à des investisseurs. Slides animés, transitions fluides entre les écrans produit, rythme maîtrisé pour accompagner un discours commercial. Livrable utilisable en démo pitch et sur les réseaux pro.",
    tools: ["After Effects", "Premiere Pro"],
    year: "2024",
  },
  // {
  //   id: "vd-fashion-collage",
  //   title: "Fashion Photo Collage — Éditorial animé",
  //   category: "video",
  //   type: "video",
  //   thumbnail: "/creations/fashion-photo-collage-thumb.jpg",
  //   videoUrl: "/creations/fashion-photo-collage.mp4",
  //   videoType: "mp4",
  //   description:
  //     "Montage photo animé au thème mode, palette noir et brun chaud. Collage éditorial rythmé avec transitions dynamiques, jeu d'ombres et de lumière, tempo calé sur la musique. Format pensé pour réseaux sociaux (Instagram, TikTok).",
  //   tools: ["Premiere Pro", "After Effects"],
  //   year: "2024",
  // },
  {
    id: "vd-reel-0405",
    title: "Short cinématique — Campagne U-club",
    category: "video",
    type: "video",
    thumbnail: "/creations/reel-0405-thumb.jpg",
    videoUrl: "/creations/reel-0405.mp4",
    videoType: "mp4",
    description:
      "Court métrage lifestyle tourné en ambiance studieuse à Abidjan. Travail sur les cadrages fixes, l'étalonnage naturel et la narration visuelle sans dialogue. Captation & montage intégral.",
    tools: ["Premiere Pro", "Lightroom (LUT)"],
    year: "2024",
  },
  {
    id: "vd-youtube-project",
    title: "Projet vidéo long format",
    category: "video",
    type: "video",
    thumbnail: "https://img.youtube.com/vi/UVI8aH74ux4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/UVI8aH74ux4",
    videoType: "youtube",
    description:
      "Projet vidéo long format publié sur YouTube. Montage structuré, étalonnage soigné et synchronisation audio. Pensé pour un visionnage complet plutôt qu'un aperçu réseau social.",
    tools: ["Premiere Pro"],
    year: "2024",
  },
];

export default creations;

// Catégories affichées dans les filtres
export const categories = [
  { id: "all", label: "Tous" },
  { id: "photoshop", label: "Photoshop" },
  { id: "canva", label: "Canva" },
  { id: "video", label: "Vidéo" },
];
