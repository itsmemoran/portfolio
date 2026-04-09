const caseStudies = [
  {
    project: "Portail de Santé — MediConnect",
    challenge:
      "Les patients devaient appeler le cabinet pour chaque information (résultats, rendez-vous, ordonnances). Le personnel administratif perdait un temps considérable en appels évitables. Aucune solution existante ne correspondait au budget ni aux contraintes de sécurité des données médicales.",
    approach: [
      "Audit des flux existants — observation sur site, interviews de secrétaires et patients pour identifier les points de friction.",
      "Priorisation — matrice impact/effort pour définir un MVP centré sur : consultation du dossier + prise de rendez-vous.",
      "Architecture sécurisée — chiffrement des données sensibles au repos (pgcrypto), JWT avec rotation, RBAC strict par rôle.",
      "Design accessible — contraste AAA, taille de police minimum 16px, navigation clavier complète, tests VoiceOver.",
    ],
    solution:
      "API REST Express avec 14 endpoints, base PostgreSQL normalisée (3NF), frontend React avec formulaires accessibles et feedback utilisateur en temps réel (toasts, états de chargement, messages d'erreur contextuels).",
    metrics: [
      { label: "Réduction des appels", value: "−65%" },
      { label: "Prise de RDV", value: "< 1 min" },
      { label: "Accessibilité Lighthouse", value: "98/100" },
    ],
  },
  {
    project: "Plateforme E-Commerce — ShopStack",
    challenge:
      "Le client vendait uniquement en physique et souhaitait passer au e-commerce sans budget pour une solution SaaS premium. Le catalogue comptait 200+ produits avec des variations (taille, couleur) complexes à modéliser.",
    approach: [
      "Benchmark de 5 boutiques concurrentes : identification des points de friction principaux (tunnels trop longs, recherche inefficace).",
      "Modélisation NoSQL avec documents imbriqués pour les variantes produit — évite les jointures coûteuses.",
      "UX du tunnel réduite à 3 étapes : Panier → Informations → Paiement, avec indicateur de progression visible.",
      "Performance : index composites MongoDB sur catégorie + prix + stock, lazy loading des images produit.",
    ],
    solution:
      "Application MERN complète avec recherche full-text (MongoDB text index), panier persistant (localStorage synchronisé avec la DB à l'authentification), intégration Stripe Checkout, et dashboard vendeur avec graphiques de ventes Recharts.",
    metrics: [
      { label: "Étapes du tunnel", value: "3" },
      { label: "Temps chargement", value: "1.3s" },
      { label: "Produits gérés", value: "250+" },
    ],
  },
];

export default caseStudies;
