import voyages from "@/assets/voyages.png";
import mediatek from "@/assets/mediatek.png";
import portfolio from "@/assets/portfolio.png";

export type LocalizedString = { en: string; fr: string };

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
}

export const projects: Project[] = [
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
    stack: ["Symfony", "JavaScript"],
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
    github: "https://github.com/karlmitschi/e-commerce",
    live: "https://karl-mitschi.fr",
    showGithub: true,
    showLive: true,
  },
];
