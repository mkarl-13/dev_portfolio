export type Locale = "en" | "fr";

export const content = {
  en: {
    header: {
      links: [
        { label: "About", href: "/#about" },
        { label: "Projects", href: "/#projects" },
        { label: "Skills", href: "/#skills" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    hero: {
      title: "Karl Mitschi",
      subtitle:
        "Welcome to my portfolio. I'm a BTS SIO student at CNED and a developer.",
      cta: "View my projects",
      ctaSecondary: "Contact me",
    },
    about: {
      title: "About Me",
      pitch:
        "Second-year BTS SIO student at CNED, I develop web and desktop applications — from front-end to data management.",
      background:
        "Throughout my training, I have had the opportunity to work on both front-end interface design and back-end logic, whether for web projects or Windows .NET applications. Studying at CNED means opting for a fully remote format that requires discipline and autonomy. Alongside my training, I deepen my knowledge on my own through documentation, books and videos.",
      cv: "Download CV",
    },
    projects: {
      title: "Projects",
      subtitle: "Here are some projects I have recently worked on.",
      cta: "View project",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I often use to build my applications.",
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out to discuss projects or anything else.",
      name: "Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project idea, other",
      message: "Message",
      messagePlaceholder: "Hello, I would like to... example",
      submit: "Send message",
      successTitle: "Message sent",
      successSubtitle: "I will get back to you as soon as possible.",
    },
    footer: {
      copy: "Karl's Portfolio",
    },
  },
  fr: {
    header: {
      links: [
        { label: "À propos", href: "/#about" },
        { label: "Projets", href: "/#projects" },
        { label: "Compétences", href: "/#skills" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    hero: {
      title: "Karl Mitschi",
      subtitle:
        "Bienvenue sur mon portfolio. Je suis étudiant de BTS SIO au CNED et développeur",
      cta: "Voir mes projets",
      ctaSecondary: "Me contacter",
    },
    about: {
      title: "À propos",
      pitch:
        "Étudiant en BTS SIO 2ème année au CNED, je développe des applications web et desktop — du front-end à la gestion des données.",
      background:
        "Au fil de ma formation, j'ai eu l'occasion de travailler aussi bien sur la conception d'interfaces front-end que sur la logique back-end, que ce soit pour des projets web ou des applications Windows .NET. Choisir le CNED, c'est opter pour un format entièrement à distance qui demande rigueur et autonomie. En parallèle de ma formation, j'approfondis mes connaissances par moi-même à travers des documentations, des livres et des vidéos",
      cv: "Télécharger le CV",
    },
    projects: {
      title: "Projets",
      subtitle: "Voici quelques projets que j'ai pu réaliser dernièrement",
      cta: "Voir le projet",
    },
    skills: {
      title: "Compétences",
      subtitle:
        "Les technologies que j'utilise souvent pour réaliser mes applications",
    },
    contact: {
      title: "Contact",
      subtitle:
        "N'hésitez pas à me contacter pour discuter de projets ou autre",
      name: "Nom",
      namePlaceholder: "Jean Dupont",
      email: "Email",
      emailPlaceholder: "jean@exemple.com",
      subject: "Sujet",
      subjectPlaceholder: "Idée de projet, autre",
      message: "Message",
      messagePlaceholder: "Bonjour, je souhaiterais ... exemple",
      submit: "Envoyer le message",
      successTitle: "Message envoyé",
      successSubtitle: "Je vous répondrai dès que possible",
    },
    footer: {
      copy: "Portfolio de Karl",
    },
  },
} as const;
