// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a list of projects I am working on/have worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-received-an-outstanding-student-presentation-award-at-agu-fall-meeting-2024",
          title: 'Received an Outstanding Student Presentation Award at AGU Fall Meeting 2024.',
          description: "",
          section: "News",},{id: "news-presented-at-agu-fall-meeting-2025",
          title: 'Presented at AGU Fall Meeting 2025.',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-bssa-our-manuscript-introducing-the-normalized-frequency-index-nfi-as-a-robust-model-free-measure-of-earthquake-high-frequency-radiation",
          title: 'Paper accepted at BSSA: our manuscript introducing the normalized frequency index (nFI) as...',
          description: "",
          section: "News",},{id: "news-attending-egu-general-assembly-2026-in-vienna",
          title: 'Attending EGU General Assembly 2026 in Vienna.',
          description: "",
          section: "News",},{id: "news-dissertation-defense-scheduled-for-june-2026",
          title: 'Dissertation defense scheduled for June 2026.',
          description: "",
          section: "News",},{id: "projects-california-nfi",
          title: 'California nFI',
          description: "Quantifying relative high-frequency enrichment of earthquakes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/california_nfi/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/vandevert_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%76%61%6E%64%65%76%65%72%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9560-4787", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ivandevert", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ian-vandevert-67b01014b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=iy5McroAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
