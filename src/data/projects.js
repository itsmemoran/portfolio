const projects = [
  {
    id: "health-portal",
    num: "01",
    title: "Portail de Santé Interactif Centre Medical Danan",
    category: "fullstack",
    stack: ["PostgreSQL", "Express.js", "React", "Node.js", "Tailwind CSS"],
    summary:
      "Application web permettant aux patients de consulter leur dossier médical, gérer leurs rendez-vous et communiquer avec leur praticien via une interface sécurisée et accessible.",
    details: [
      "PostgreSQL : stockage structuré des patients, RDV, médecins avec schéma relationnel complet.",
      "Express.js API : routes REST sécurisées avec authentification JWT et refresh tokens.",
      "React : interface dynamique avec hooks pour formulaires et dashboard médecin/patient.",
      "Node.js : backend scalable avec middlewares de validation et gestion d'erreurs centralisée.",
      "UI/UX Tailwind : design moderne, mobile-first et accessible (WCAG 2.1 AA).",
    ],
    results: [
      "Interface accessible testée sur lecteur d'écran (VoiceOver)",
      "Temps de chargement moyen < 1.5s sur 3G simulé",
      "Authentification sécurisée avec expiration de session et RBAC",
      "Score Lighthouse Accessibilité : 98/100",
    ],
    color: "#2a7d6e",
    liveUrl: "https://pern-patient-portal-project.vercel.app/login",
  },
  {
    id: "Netpro Entreprise",
    num: "02",
    title: "Site Professionnel Dynamique Netpro Entreprise",
    category: "fullstack",
    stack: ["PostgreSQL", "Express.js", "React", "Node.js", "Tailwind CSS"],
    summary:
      "Site professionnel avec CMS léger permettant au client de modifier son contenu en autonomie — textes, images, portfolio, blog — sans toucher au code.",
    details: [
      "Backend PERN : API REST pour pages, portfolio et blog avec CRUD complet.",
      "Admin UI : interface d'ajout/édition de contenu sécurisée avec prévisualisation.",
      "React + Tailwind : pages fluides, navigation rapide et expérience utilisateur optimisée.",
      "SEO & Performance : SSR/optimisation composants pour meilleur référencement.",
      "Système d'upload d'images avec compression côté serveur.",
    ],
    results: [
      "Client autonome sur la gestion de contenu dès la livraison",
      "Score Lighthouse Performance > 90",
      "Zéro downtime depuis le déploiement",
    ],
    color: "#c4632d",
    liveUrl: "https://netpro-entreprise.fr/",
  },
  {
    id: "ecommerce",
    num: "03",
    title: "Plateforme E-Commerce",
    category: "fullstack",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
    summary:
      "Boutique en ligne complète avec catalogue produits, panier persistant, système de paiement intégré et tableau de bord vendeur avec métriques de ventes.",
    details: [
      "MongoDB : modèle de données flexible pour produits, utilisateurs et commandes.",
      "Express & Node : API RESTful avec sécurité (authentification, rôles admin).",
      "React : UI complète avec catalogue, filtres dynamiques et recherche live.",
      "Paiement : intégration Stripe avec gestion des webhooks.",
      "Redux / Context API : gestion globale du panier et de la session utilisateur.",
    ],
    results: [
      "Tunnel de conversion fonctionnel en 3 étapes",
      "Panier persistant entre sessions (localStorage + sync DB)",
      "Dashboard vendeur avec graphiques Recharts",
      "250+ produits gérés avec filtrage performant",
    ],
    color: "#6b4c9a",
    liveUrl: "#",
  },
  {
    id: "festival",
    num: "04",
    title: "Site de Festival 'BARBECUE GEANT'",
    category: "fullstack",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    summary:
      "Site événementiel pour un festival musical avec programmation dynamique, système de billetterie en ligne et carte interactive des scènes.",
    details: [
      "API REST pour gestion artistes/scènes/horaires/billets avec contrôle de concurrence.",
      "MongoDB pour la flexibilité du schéma événementiel.",
      "React avec animations CSS de transitions entre vues et composants réutilisables.",
      "Système de filtrage par jour, scène et genre musical.",
      "Expérience mobile-first immersive avec navigation fluide.",
    ],
    results: [
      "Navigation fluide entre 50+ artistes sans temps de chargement perceptible",
      "Expérience mobile notée excellente lors de tests utilisateurs",
      "Carte interactive fonctionnelle avec géolocalisation des scènes",
    ],
    color: "#b5543b",
    liveUrl: "https://barbecue-geant25-5ux5.vercel.app/",
  },
];

export default projects;
