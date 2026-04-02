import voyages from "@/assets/voyages.png";
import mediatek from "@/assets/mediatek.png";
import mediatekformation from "@/assets/mediatekformation.png";
import portfolio from "@/assets/portfolio.png";

import mediatekDocumentsContextePdf from "@/assets/mediatekformation/87DP1ANWB0120.pdf";
import crPdf from "@/assets/mediatekformation/cr.pdf";
import contextePdf from "@/assets/mediatekformation/contexte.pdf";
import pvrDocx from "@/assets/mediatekformation/pvr.docx";
import cahierChargesPdf from "@/assets/mediatekformation/cahier_des_charges.pdf";
import contratDevPdf from "@/assets/mediatekformation/contratDeveloppement.pdf";
import missionsPdf from "@/assets/mediatekformation/missions.pdf";

export type LocalizedString = { en: string; fr: string };

export interface ProjectLink {
  label: LocalizedString;
  url: string;
}

export interface ProjectCompetency {
  code: string;
  label: LocalizedString;
}

export interface Project {
  slug: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  longDesc: LocalizedString;
  stack: string[];
  image: string;
  github: string;
  live: string;
  showGithub?: boolean;
  showLive?: boolean;
  links?: ProjectLink[];
  video?: string;
  competencies?: ProjectCompetency[];
}

export const projects: Project[] = [
  {
    video: "https://www.youtube.com/embed/54whQ_u7-J4",
    slug: "mediatekformation",
    title: {
      en: "Course Management App",
      fr: "Application de gestion de formations",
    },
    shortDesc: {
      en: "Training video platform with a full back-office, authentication and automated deployment, developed as part of my CNED training.",
      fr: "Plateforme de formations vidéo avec back-office complet, authentification et déploiement automatisé, développée dans le cadre de ma formation au CNED.",
    },
    longDesc: {
      en: `## Overview

As part of my first professional workshop at CNED, I maintained and extended an existing application called **Mediatekformation** — a platform for browsing training videos organized by playlists and categories for the fictional MediaTek86 library network.

The original application only had a front-office. My mission was to add a complete back-office, secure it with authentication, write automated tests, and deploy the application.

## Features

- **Front-office**: browse, filter and sort training videos by playlist and category
- **Number of formations per playlist**: new sortable column added to the playlist list and detail pages
- **Back-office** (accessible via /admin):
  - Manage formations: list, create, edit, delete (with CSRF protection)
  - Manage playlists: list, create, edit, delete (only if empty)
  - Manage categories: list, add, delete inline
- **Authentication**: secured admin access with login/logout
- **Automated tests**: functional tests for all list pages (sorts, filters, CRUD)
- **Continuous deployment**: GitHub Actions workflow deploying via FTP on each push
- **Automated database backup**: daily cron job on the server

## Technical choices

The application uses **Symfony** (PHP) with a **Twig** templating engine, **Bootstrap** for styling, and a **MySQL** relational database. The MVC architecture was already in place — I extended it while keeping the existing structure consistent.

Tests are written with **PHPUnit** and Symfony's test client, simulating browser interactions without a real browser.

## What I learned

- Extending an existing Symfony application without breaking existing features
- Building a complete CRUD back-office with security (CSRF tokens, authentication)
- Writing functional tests with PHPUnit and Symfony's crawler
- Setting up continuous deployment with GitHub Actions and FTP
- Deploying and configuring a Symfony app on a shared hosting environment (o2switch)

## Competencies covered (B1/B2)

- **B1.1** Manage IT assets
- **B1.3** Develop the organization's online presence
- **B1.4** Work in project mode
- **B1.5** Deploy IT services for users
- **B1.6** Organize professional development
- **B2.1** Design and develop an application solution
- **B2.2** Perform corrective or evolutionary maintenance of an application
- **B2.3** Manage data

> This workshop was my first large-scale professional project. Beyond the technical aspects, I gained a lot in terms of project organisation and technical documentation.`,
      fr: `## Présentation

Dans le cadre de mon premier atelier professionnel au CNED, j'ai maintenu et fait évoluer une application existante appelée **Mediatekformation** — une plateforme de visionnage de formations organisées par playlists et catégories pour le réseau de médiathèques fictif MediaTek86.

L'application d'origine ne comportait qu'une partie front-office. Ma mission était d'y ajouter un back-office complet, de le sécuriser par authentification, d'écrire des tests automatisés et de déployer l'application.

## Fonctionnalités

- **Front-office** : consultation, filtrage et tri des formations par playlist et catégorie
- **Nombre de formations par playlist** : nouvelle colonne triable ajoutée sur la page des playlists et la page de détail
- **Back-office** (accessible via /admin) :
  - Gérer les formations : lister, créer, modifier, supprimer (avec protection CSRF)
  - Gérer les playlists : lister, créer, modifier, supprimer (uniquement si vide)
  - Gérer les catégories : lister, ajouter, supprimer inline
- **Authentification** : accès admin sécurisé avec connexion/déconnexion
- **Tests automatisés** : tests fonctionnels pour toutes les pages de listes (tris, filtres, CRUD)
- **Déploiement continu** : workflow GitHub Actions déployant via FTP à chaque push
- **Sauvegarde automatique de la BDD** : tâche cron quotidienne côté serveur

## Choix techniques

L'application utilise **Symfony** (PHP) avec le moteur de templates **Twig**, **Bootstrap** pour le style, et une base de données relationnelle **MySQL**. L'architecture MVC était déjà en place — je l'ai étendue en restant cohérent avec la structure existante.

Les tests sont écrits avec **PHPUnit** et le client de test de Symfony, simulant des interactions navigateur sans vrai navigateur.

## Ce que j'ai appris

- Étendre une application Symfony existante sans casser les fonctionnalités en place
- Construire un back-office CRUD complet avec sécurité (tokens CSRF, authentification)
- Écrire des tests fonctionnels avec PHPUnit et le crawler Symfony
- Mettre en place un déploiement continu avec GitHub Actions et FTP
- Déployer et configurer une application Symfony sur un hébergement mutualisé (o2switch)

## Compétences couvertes (B1/B2)

- **B1.1** Gérer le patrimoine informatique
- **B1.3** Développer la présence en ligne de l'organisation
- **B1.4** Travailler en mode projet
- **B1.5** Mettre à disposition des utilisateurs un service informatique
- **B1.6** Organiser son développement professionnel
- **B2.1** Concevoir et développer une solution applicative
- **B2.2** Assurer la maintenance corrective ou évolutive d'une solution applicative
- **B2.3** Gérer les données

> Cet atelier était mon premier projet professionnel d'envergure. Au-delà de la technique, j'ai beaucoup progressé en organisation de projet et en rédaction de documentation technique.`,
    },
    stack: ["Symfony", "PHP", "MySQL", "PHPUnit"],
    image: mediatekformation,
    github: "https://github.com/mkarl-13/mediatekformation",
    live: "http://app.sc3mika2559.universe.wf/",
    showGithub: true,
    showLive: true,
    links: [
      {
        label: { en: "Project report (PDF)", fr: "Compte rendu (PDF)" },
        url: crPdf,
      },
      {
        label: { en: "Official context (PDF)", fr: "Contexte officiel (PDF)" },
        url: contextePdf,
      },
      {
        label: {
          en: "Development contract (PDF)",
          fr: "Contrat de développement (PDF)",
        },
        url: contratDevPdf,
      },
      {
        label: { en: "Specifications", fr: "Cahier des charges" },
        url: cahierChargesPdf,
      },
      {
        label: {
          en: "Missions document (PDF)",
          fr: "Document des missions (PDF)",
        },
        url: missionsPdf,
      },
      {
        label: { en: "Acceptance report (PDF)", fr: "PV de recette (PDF)" },
        url: pvrDocx,
      },
      {
        label: { en: "GitHub repository", fr: "Dépôt GitHub" },
        url: "https://github.com/mkarl-13/mediatekformation",
      },
      {
        label: { en: "Live site", fr: "Site en ligne" },
        url: "http://app.sc3mika2559.universe.wf/",
      },
      {
        label: { en: "Technical documentation", fr: "Documentation technique" },
        url: "http://sc3mika2559.universe.wf/mediatekformation_doc/",
      },
    ],
  },
  {
    slug: "mediatekdocuments",
    title: {
      en: "Document Management App",
      fr: "Application de gestion de documents",
    },
    shortDesc: {
      en: "Desktop document management application for the MediaTek86 library network, built with C# Windows Forms and a PHP REST API.",
      fr: "Application desktop de gestion de documents pour le réseau de médiathèques MediaTek86, développée en C# Windows Forms avec une API REST en PHP.",
    },
    longDesc: {
      en: `## Overview

As part of my second professional workshop at CNED (AP2), I developed a document management desktop application for **InfoTech Services 86** (ITS 86), an IT services company contracted by the **MediaTek86** library network.

The goal was to give library employees a Windows application to manage the document catalog (books, DVDs, CDs, etc.), communicating with a **PHP REST API** backed by a MySQL database.

## Features

- Browse and search documents in the full catalog
- Add, edit and delete documents (CRUD)
- Communicate with the REST API via HTTP requests
- User authentication
- Native Windows Forms interface

## Technical choices

The desktop client is built in **C#** with **Windows Forms**, following the **MVC architectural pattern**. Data is exposed by a custom **PHP REST API** (without framework) which queries a **MySQL** database.

The two components are split into separate repositories: one for the Windows Forms client, one for the REST API.

## What I learned

- Designing a desktop application that consumes a REST API
- Building a PHP REST API from scratch without a framework
- Managing application state across multiple Windows Forms
- Applying the MVC pattern in a desktop context
- Coordinating two interdependent projects across separate repositories

## Competencies covered (B1/B2)

- **B1.1** Manage IT assets
- **B1.4** Work in project mode
- **B1.5** Deploy IT services for users
- **B1.6** Organize professional development
- **B2.1** Design and develop an application solution
- **B2.3** Manage data

> This workshop taught me to think in terms of distributed architecture — separating the data layer (API) from the presentation layer (desktop client).`,
      fr: `## Présentation

Dans le cadre de mon deuxième atelier professionnel au CNED (AP2), j'ai développé une application desktop de gestion de documents pour la société **InfoTech Services 86** (ITS 86), une ESN mandatée par le réseau de médiathèques **MediaTek86**.

L'objectif était de fournir aux employés des médiathèques une application Windows permettant de gérer le catalogue de documents (livres, DVD, CD...), en communiquant avec une **API REST en PHP** connectée à une base de données MySQL.

## Fonctionnalités

- Consultation et recherche de documents dans le catalogue complet
- Ajout, modification et suppression de documents (CRUD)
- Communication avec l'API REST via des requêtes HTTP
- Authentification utilisateur
- Interface native Windows Forms

## Choix techniques

Le client desktop est développé en **C#** avec **Windows Forms**, selon le patron d'architecture **MVC**. Les données sont exposées par une **API REST en PHP** (sans framework) qui interroge une base de données **MySQL**.

Les deux composants sont séparés en dépôts distincts : l'un pour le client Windows Forms, l'autre pour l'API REST.

## Ce que j'ai appris

- Concevoir une application desktop consommant une API REST
- Construire une API REST en PHP sans framework
- Gérer l'état de l'application entre plusieurs formulaires Windows Forms
- Appliquer le patron MVC dans un contexte desktop
- Coordonner deux projets interdépendants sur des dépôts séparés

## Compétences couvertes (B1/B2)

- **B1.1** Gérer le patrimoine informatique
- **B1.4** Travailler en mode projet
- **B1.5** Mettre à disposition des utilisateurs un service informatique
- **B1.6** Organiser son développement professionnel
- **B2.1** Concevoir et développer une solution applicative
- **B2.3** Gérer les données

> Cet atelier m'a appris à raisonner en termes d'architecture distribuée — séparer la couche données (API) de la couche présentation (client desktop).`,
    },
    stack: ["C#", "Windows Forms", "PHP", "MySQL"],
    image: mediatek,
    github: "https://github.com/mkarl-13/mediatekdocuments",
    live: "",
    showGithub: true,
    showLive: false,
    links: [
      {
        label: { en: "Project report (PDF)", fr: "Compte rendu (PDF)" },
        url: "",
      },
      {
        label: { en: "Official context (PDF)", fr: "Contexte officiel (PDF)" },
        url: mediatekDocumentsContextePdf,
      },
      {
        label: {
          en: "Development contract (PDF)",
          fr: "Contrat de développement (PDF)",
        },
        url: "",
      },
      {
        label: { en: "Specifications", fr: "Cahier des charges" },
        url: "",
      },
      {
        label: {
          en: "Missions document (PDF)",
          fr: "Document des missions (PDF)",
        },
        url: "",
      },
      {
        label: { en: "Acceptance report", fr: "PV de recette" },
        url: "",
      },
      {
        label: { en: "GitHub – Windows client", fr: "GitHub – Client Windows" },
        url: "https://github.com/mkarl-13/mediatekdocuments",
      },
      {
        label: { en: "GitHub – REST API", fr: "GitHub – API REST" },
        url: "https://github.com/mkarl-13/rest_mediatekdocuments",
      },
      {
        label: { en: "Technical documentation", fr: "Documentation technique" },
        url: "",
      },
    ],
  },
  {
    slug: "mesvoyages",
    title: {
      en: "My Travels",
      fr: "Mes voyages",
    },
    shortDesc: {
      en: "Travel description and rating website developed as part of my CNED training.",
      fr: "Site de description et de notation de voyages développé dans le cadre de ma formation au CNED.",
    },
    longDesc: {
      en: `## Overview

As part of my second year of BTS SIO at CNED, I developed a travel description and rating website using the **Symfony** framework.

The goal was to build a complete web application allowing users to browse, describe and rate trips — with a clean interface and a solid back-end architecture.

## Features

- Browse a list of destinations with descriptions and ratings
- Add, edit and delete travel entries
- Rating system out of 20 per destination
- Admin page (/admin) for content management — authentication planned for a future course sequence
- Responsive layout adapted for mobile and desktop

## Technical choices

I chose **Symfony** for its robustness and its MVC architecture, which allowed me to cleanly separate the business logic from the presentation layer. **Doctrine** is used for database access. **JavaScript** was used for the interactive parts of the interface.

The project was deployed on a shared hosting environment.

## What I learned

- Building a full MVC application with Symfony
- Managing database access with Doctrine
- Writing Twig templates with reusable components
- Deploying a PHP application to a shared host

> This project gave me a solid foundation in back-end development and helped me understand the full lifecycle of a web application.`,
      fr: `## Présentation

Dans le cadre de ma deuxième année de BTS SIO au CNED, j'ai développé un site de description et de notation de voyages avec le framework **Symfony**.

L'objectif était de construire une application web complète permettant aux utilisateurs de consulter, décrire et noter des voyages — avec une interface soignée et une architecture back-end solide.

## Fonctionnalités

- Consultation d'une liste de destinations avec descriptions et notes
- Ajout, modification et suppression de voyages
- Système de notation sur 20 par destination
- Page d'administration (/admin) pour la gestion du contenu — l'authentification est prévue dans une prochaine séquence du cours
- Interface responsive adaptée mobile et desktop

## Choix techniques

J'ai choisi **Symfony** pour sa robustesse et son architecture MVC, qui m'a permis de séparer proprement la logique métier de la couche de présentation. **Doctrine** est utilisé pour l'accès à la base de données. **JavaScript** a été utilisé pour les parties interactives de l'interface.

Le projet a été déployé sur un hébergement mutualisé.

## Ce que j'ai appris

- Construire une application MVC complète avec Symfony
- Gérer l'accès à la base de données avec Doctrine
- Écrire des templates Twig avec des composants réutilisables
- Déployer une application PHP sur un hébergement mutualisé

> Ce projet m'a donné une base solide en développement back-end et m'a permis de comprendre le cycle de vie complet d'une application web.`,
    },
    stack: ["Symfony", "MySQL"],
    image: voyages,
    github: "https://github.com/mkarl-13/mesvoyages",
    live: "http://mesvoyages.sc1mika2559.universe.wf/",
    showGithub: true,
    showLive: true,
  },
  {
    slug: "app-gestion-personnel",
    title: {
      en: "Staff Management Application",
      fr: "Application de gestion de personnel",
    },
    shortDesc: {
      en: "Staff management application for a media library developed as part of my CNED training.",
      fr: "Application de gestion de personnel pour une médiathèque développée dans le cadre de ma formation au CNED.",
    },
    longDesc: {
      en: `## Overview

For my BTS SIO training at CNED, I developed a desktop staff management application for a fictional media library called **MediaTek86**.

The application was built in **C#** using **Windows Forms**, and follows the **MVC architectural pattern** to keep the codebase clean and maintainable.

## Features

- Display and search the full list of staff members
- Add, edit and deactivate staff accounts
- Absence management system (tracking and viewing absences)
- Only the manager can log in — a single secured account
- Connect to a local **MySQL** database via a dedicated BddManager class
- Form validation with user-friendly error messages

## Technical choices

**C# with Windows Forms** was the required stack for this project. I structured the application around the MVC pattern, separating the data access layer, the business logic controllers, and the UI forms.

Database access is handled through a custom **BddManager** class that centralizes all queries to the local MySQL database, keeping the data layer clean and easy to maintain.

## What I learned

- Designing a desktop application architecture in C#
- Managing a local MySQL database from a Windows Forms app
- Implementing a login system restricted to a single manager account
- Building an absence management module
- Managing application state across multiple forms
- Applying MVC principles outside of a web context

> This project gave me a deeper understanding of enterprise application design and the importance of clean architecture even in desktop environments.`,
      fr: `## Présentation

Pour ma formation BTS SIO au CNED, j'ai développé une application desktop de gestion du personnel pour une médiathèque fictive appelée **MediaTek86**.

L'application a été développée en **C#** avec **Windows Forms**, et suit le **patron d'architecture MVC** pour garder le code propre et maintenable.

## Fonctionnalités

- Affichage et recherche de la liste complète du personnel
- Ajout, modification et désactivation de comptes employés
- Système de gestion des absences (suivi et consultation)
- Seul le responsable peut se connecter — un unique compte sécurisé
- Connexion à une base de données **MySQL** locale via une classe BddManager dédiée
- Validation de formulaires avec messages d'erreur clairs

## Choix techniques

**C# avec Windows Forms** était la stack imposée pour ce projet. J'ai structuré l'application autour du patron MVC, en séparant la couche d'accès aux données, les contrôleurs de logique métier, et les formulaires UI.

L'accès à la base de données est géré par une classe **BddManager** personnalisée qui centralise toutes les requêtes vers la base MySQL locale, ce qui permet de garder la couche données propre et facile à maintenir.

## Ce que j'ai appris

- Concevoir l'architecture d'une application desktop en C#
- Gérer une base de données MySQL locale depuis une application Windows Forms
- Implémenter un système de connexion réservé au responsable
- Construire un module de gestion des absences
- Gérer l'état de l'application entre plusieurs formulaires
- Appliquer les principes MVC en dehors d'un contexte web

> Ce projet m'a permis de mieux comprendre la conception d'applications d'entreprise et l'importance d'une architecture propre, même dans un environnement desktop.`,
    },
    stack: ["C#", "Windows Forms"],
    image: mediatek,
    github: "https://github.com/mkarl-13/Gestion-Personnel-MediaTek86",
    live: "",
    showGithub: true,
    showLive: false,
  },
  {
    slug: "portfolio",
    title: {
      en: "Portfolio",
      fr: "Portfolio",
    },
    shortDesc: {
      en: "Portfolio website built with React and Shadcn",
      fr: "Site de portfolio construit avec React et Shadcn",
    },
    longDesc: {
      en: `## Overview

This portfolio is a personal project I built to showcase my work and skills as a fullstack developer. I wanted something modern, fast and fully customizable — so I chose **React** with **TypeScript** and **ShadCN UI**.

## Features

- Bilingual support (English / French) with a custom i18n system — no external library
- Time-based dynamic background: the gradient blobs change color depending on the time of day (morning, afternoon, evening, night)
- Mouse parallax effect on the background blobs
- Smooth scroll navigation with a sticky header
- Project detail pages with **Markdown** rendering
- Responsive design with a hamburger menu on mobile (ShadCN Sheet)
- Dark / Light mode toggle

## Technical choices

I deliberately avoided heavy libraries like i18next or react-spring — everything is built with lightweight custom hooks and CSS transitions. The component library is **ShadCN UI**, which gives full control over styling while staying accessible.

The project structure is split into:
- **data/** for centralized content (projects, translations, tech icons, time themes)
- **components/** for reusable UI blocks
- **context/** for locale and theme state
- **pages/** for routed views

## What I learned

- Building a custom i18n system with React Context
- Implementing parallax and time-based theming without external dependencies
- Integrating ShadCN components and customizing them with Tailwind
- Structuring a React project for long-term maintainability
- Using React Router for client-side navigation with smooth scroll support

> The background globe colors shift automatically between four color palettes depending on the time of day — a small detail that makes the site feel alive.`,
      fr: `## Présentation

Ce portfolio est un projet personnel que j'ai développé pour présenter mes travaux et mes compétences en tant que développeur fullstack. Je voulais quelque chose de moderne, rapide et entièrement personnalisable — j'ai donc choisi **React** avec **TypeScript** et **ShadCN UI**.

## Fonctionnalités

- Support bilingue (anglais / français) avec un système i18n custom — sans librairie externe
- Fond dynamique basé sur l'heure : les globes changent de couleur selon le moment de la journée (matin, après-midi, soir, nuit)
- Effet parallax sur les globes de fond au mouvement de la souris
- Navigation avec scroll fluide et header sticky
- Pages de détail de projet avec rendu **Markdown**
- Design responsive avec menu hamburger sur mobile (ShadCN Sheet)
- Basculement mode sombre / clair

## Choix techniques

J'ai volontairement évité les librairies lourdes comme i18next ou react-spring — tout est construit avec des hooks custom légers et des transitions CSS. La librairie de composants est **ShadCN UI**, qui offre un contrôle total sur le style tout en restant accessible.

La structure du projet est découpée en :
- **data/** pour le contenu centralisé (projets, traductions, icônes tech, thèmes temporels)
- **components/** pour les blocs UI réutilisables
- **context/** pour l'état de la locale et du thème
- **pages/** pour les vues routées

## Ce que j'ai appris

- Construire un système i18n custom avec React Context
- Implémenter un parallax et un thème basé sur l'heure sans dépendances externes
- Intégrer les composants ShadCN et les personnaliser avec Tailwind
- Structurer un projet React pour une maintenabilité à long terme
- Utiliser React Router pour la navigation côté client avec support du scroll fluide

> La couleur des globes en fond change automatiquement entre quatre palettes selon l'heure de la journée — un détail qui donne l'impression que le site est vivant.`,
    },
    stack: ["React", "TypeScript"],
    image: portfolio,
    github: "", // À compléter
    live: "https://karl-mitschi.fr",
    showGithub: true,
    showLive: true,
  },
];
