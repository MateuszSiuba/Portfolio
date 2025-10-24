export const translations = {
  pl: {
    nav: {
      home: 'Strona Główna',
      about: 'O mnie',
      experience: 'Doświadczenie',
      education: 'Wykształcenie',
      skills: 'Umiejętności',
      projects: 'Projekty',
      contact: 'Kontakt',
    },
    hero: {
      role: 'IT Specialist | Product AI Manager',
      description: 'Dynamicznie rozwijający się specjalista IT z pasją do nowoczesnych technologii i sztucznej inteligencji',
      location: 'Lubuskie, Gorzów Wielkopolski',
      viewProjects: 'Zobacz projekty',
      contactMe: 'Skontaktuj się',
      downloadCV: 'Pobierz CV',
    },
    about: {
      title: 'O mnie',
      description1: 'Jestem dynamicznie rozwijającym się specjalistą IT z praktycznym doświadczeniem w administrowaniu bazami danych, wsparciu technicznym oraz tworzeniu innowacyjnych rozwiązań opartych na sztucznej inteligencji.',
      description2: 'Jako student informatyki jestem zdeterminowany do ciągłego rozwoju w obszarze nowoczesnych technologii. Moja droga zawodowa pokazuje szybką progresję - od specjalisty wsparcia technicznego, przez CBL/T2, aż do roli Specjalisty Produktu w ciągu zaledwie kilku miesięcy.',
      description3: 'Szczególnie interesuję mnie projekty związane z AI, automatyzacją procesów oraz tworzeniem nowoczesnych aplikacji webowych. Pracuję w środowisku międzynarodowym (UKI&I), co pozwala mi rozwijać kompetencje językowe i techniczne na co dzień.',
      stats: {
        experience: 'Rok doświadczenia',
        certificates: 'Certyfikaty',
        projects: 'Projektów',
        promotions: 'Awanse w rok',
      },
      cards: {
        work: 'Praca',
        workDesc: 'Specjalista Produktu TPV',
        education: 'Edukacja',
        educationDesc: 'Student Informatyki',
        interests: 'Zainteresowania',
        interestsDesc: 'AI, Web Development, Automatyzacja',
      }
    },
    experience: {
      title: 'Doświadczenie zawodowe',
      subtitle: 'Szybka progresja kariery - 3 awanse w ciągu roku',
      jobs: [
        {
          title: "Specjalista Produktu TPV",
          company: "TPV",
          period: "Wrzesień 2025 - Obecnie",
          duration: "~2 miesiące",
          description: [
            "Zarządzanie produktem i analiza wymagań biznesowych",
            "Współpraca z zespołami międzynarodowymi (UKI&I)",
            "Optymalizacja procesów produktowych",
            "Komunikacja w języku angielskim na co dzień"
          ],
        },
        {
          title: "CBL/T2 Support Specialist",
          company: "TPV",
          period: "Maj 2025 - Sierpień 2025",
          duration: "~3 miesiące",
          description: [
            "Zaawansowane wsparcie techniczne poziomu 2",
            "Rozwiązywanie skomplikowanych problemów technicznych",
            "Analiza logów systemowych i diagnostyka",
            "Projekt voicebota AI dla automatyzacji procesów wsparcia"
          ],
        },
        {
          title: "Specjalista ds. Wsparcia Technicznego",
          company: "TPV",
          period: "Listopad 2024 - Maj 2025",
          duration: "~6 miesięcy",
          description: [
            "Pierwsza linia wsparcia technicznego dla klientów",
            "Rozwiązywanie problemów z produktami TPV (TV, MNT, AVA - Philips & AOC)",
            "Dokumentacja zgłoszeń i incydentów",
            "Komunikacja z klientami w języku angielskim (rynek UKI&I)"
          ],
        }
      ],
      highlights: [
        {
          title: "Projekt AI Voicebot",
          description: "Rozwój rozwiązań AI w środowisku produkcyjnym"
        },
        {
          title: "Praca międzynarodowa",
          description: "Rynek UKI&I - komunikacja w języku angielskim"
        },
        {
          title: "Analiza logów",
          description: "Diagnostyka i rozwiązywanie problemów systemowych"
        }
      ]
    },
    education: {
      title: 'Wykształcenie & Certyfikaty',
      school: {
        name: 'Akademia Jakuba z Paradyża',
        location: 'Gorzów Wielkopolski',
        field: 'Kierunek:',
        fieldValue: 'Informatyka',
        status: 'Status:',
        statusValue: 'Student',
        focus: 'Fokus:',
        focusValue: 'Programowanie, Bazy danych, AI, Sieci komputerowe',
        description: 'Aktywnie łączę teorię z praktyką, wykorzystując wiedzę akademicką w rzeczywistych projektach komercyjnych.'
      },
      certifications: {
        ccna: {
          title: 'CCNA 1 & CCNA 2',
          subtitle: 'Cisco Certified Network Associate',
          organization: '📚 Akademia Jakuba z Paradyża w Gorzowie Wielkopolskim',
          tags: ['Networking', 'Routing & Switching']
        },
        productAI: {
          title: 'Product AI Manager',
          subtitle: 'AI Product Management Certification',
          organization: '📚 Microsoft',
          tags: ['AI', 'Product Management', 'Machine Learning']
        }
      },
      continuous: {
        title: 'Ciągły rozwój',
        description: 'Aktywnie poszerzam wiedzę poprzez kursy online, projekty własne oraz praktyczne doświadczenie w pracy z nowoczesnymi technologiami (Python, Django, AI).'
      },
      keyCompetencies: {
        title: 'Kluczowe kompetencje z certyfikatów',
        networking: {
          title: 'Networking',
          description: 'Znajomość protokołów sieciowych, routingu i switching (CCNA)'
        },
        ai: {
          title: 'AI & ML',
          description: 'Zarządzanie produktami AI, implementacja rozwiązań ML'
        },
        product: {
          title: 'Product Management',
          description: 'Strategia produktowa, analiza wymagań, roadmapping'
        }
      }
    },
    skills: {
      title: 'Umiejętności techniczne',
      subtitle: 'Technologie, z którymi pracuję na co dzień',
      categories: {
        backend: 'Backend & Frameworks',
        frontend: 'Frontend',
        ai: 'AI & Automatyzacja',
        other: 'Inne technologie',
      },
      softSkillsTitle: 'Umiejętności miękkie',
      techStack: 'Stack technologiczny',
      softSkillsList: [
        { name: "Szybka nauka", icon: "🚀" },
        { name: "Język angielski", icon: "🌍" },
        { name: "Praca zespołowa", icon: "👥" },
        { name: "Problem solving", icon: "🧩" },
        { name: "Komunikacja", icon: "💬" },
        { name: "Adaptacyjność", icon: "🎯" }
      ]
    },
    projects: {
      title: 'Moje projekty',
      subtitle: 'Wybrane prace pokazujące moje umiejętności',
      viewMore: 'Zobacz więcej projektów na GitHub',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      features: 'Kluczowe funkcjonalności:',
      workProject: 'Projekt zawodowy',
      list: [
        {
          title: "Hydrotechjs.pl",
          description: "Profesjonalna strona internetowa dla firmy hydraulicznej z nowoczesnym designem i pełną funkcjonalnością biznesową.",
          features: [
            "Responsywny design dostosowany do wszystkich urządzeń",
            "Galeria wykonanych projektów z efektami",
            "Formularz kontaktowy z walidacją",
            "Integracja z Google Maps",
            "Optymalizacja SEO dla lepszej widoczności",
            "Linki do social media"
          ]
        },
        {
          title: "Wymówki Studenckie",
          description: "Interaktywna aplikacja webowa w Django do zarządzania i oceniania kreatywnych wymówek studenckich.",
          features: [
            "System rankingowy najlepszych wymówek",
            "Losowanie nowych wymówek dla inspiracji",
            "Panel administracyjny Django",
            "System logowania i rejestracji użytkowników",
            "Możliwość dodawania nowych wymówek",
            "System oceniania przez użytkowników (upvote/downvote)",
            "Backend z REST API"
          ]
        },
        {
          title: "AI Voicebot Project",
          description: "Projekt voicebota wykorzystującego sztuczną inteligencję do automatyzacji procesów wsparcia technicznego w środowisku produkcyjnym.",
          features: [
            "Rozpoznawanie mowy w języku angielskim",
            "Inteligentne odpowiedzi oparte na NLP",
            "Integracja z systemami wsparcia",
            "Analiza sentymentu rozmowy",
            "Automatyczna eskalacja problemów",
            "Raportowanie i analityka"
          ]
        }
      ]
    },
    contact: {
      title: 'Skontaktuj się',
      subtitle: 'Masz projekt lub pytanie? Napisz do mnie!',
      info: 'Informacje kontaktowe',
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokalizacja',
      availability: 'Dostępność',
      availableText: 'Jestem otwarty na nowe możliwości współpracy, projekty freelance oraz ciekawe wyzwania technologiczne.',
      availableStatus: 'Dostępny do kontaktu',
      form: {
        title: 'Wyślij wiadomość',
        name: 'Imię i nazwisko',
        namePlaceholder: 'Jan Kowalski',
        email: 'Email',
        emailPlaceholder: 'jan.kowalski@example.com',
        subject: 'Temat',
        subjectPlaceholder: 'Temat wiadomości',
        message: 'Wiadomość',
        messagePlaceholder: 'Twoja wiadomość...',
        send: 'Wyślij wiadomość',
        sending: 'Wysyłanie...',
        success: '✅ Wiadomość została wysłana pomyślnie!',
      }
    },
    footer: {
      description: 'Tworzę nowoczesne rozwiązania webowe i AI z pasją do technologii.',
      quickLinks: 'Szybkie linki',
      socialMedia: 'Social Media',
      rights: 'Wszystkie prawa zastrzeżone.',
      madeWith: 'Stworzone z',
      using: 'przy użyciu React & Tailwind CSS',
    },
    visitorCounter: {
      label: 'Odwiedziny:',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      role: 'IT Specialist | Product AI Manager',
      description: 'Dynamic IT specialist with passion for modern technologies and artificial intelligence',
      location: 'Lubuskie, Gorzów Wielkopolski, Poland',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About Me',
      description1: 'I am a dynamically developing IT specialist with practical experience in database administration, technical support, and creating innovative AI-based solutions.',
      description2: 'As a computer science student, I am determined to continuously develop in the field of modern technologies. My career path shows rapid progression - from technical support specialist, through CBL/T2, to Product Specialist role in just a few months.',
      description3: 'I am particularly interested in AI projects, process automation, and creating modern web applications. I work in an international environment (UKI&I), which allows me to develop language and technical competencies daily.',
      stats: {
        experience: 'Year of Experience',
        certificates: 'Certificates',
        projects: 'Projects',
        promotions: 'Promotions in a Year',
      },
      cards: {
        work: 'Work',
        workDesc: 'TPV Product Specialist',
        education: 'Education',
        educationDesc: 'Computer Science Student',
        interests: 'Interests',
        interestsDesc: 'AI, Web Development, Automation',
      }
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'Rapid career progression - 3 promotions in one year',
      jobs: [
        {
          title: "TPV Product Specialist",
          company: "TPV",
          period: "September 2025 - Present",
          duration: "~2 months",
          description: [
            "Product management and business requirements analysis",
            "Collaboration with international teams (UKI&I)",
            "Product process optimization",
            "Daily communication in English"
          ],
        },
        {
          title: "CBL/T2 Support Specialist",
          company: "TPV",
          period: "May 2025 - August 2025",
          duration: "~3 months",
          description: [
            "Advanced level 2 technical support",
            "Resolving complex technical issues",
            "System log analysis and diagnostics",
            "AI voicebot project for support process automation"
          ],
        },
        {
          title: "Technical Support Specialist",
          company: "TPV",
          period: "November 2024 - May 2025",
          duration: "~6 months",
          description: [
            "First line technical support for customers",
            "Resolving TPV product issues (TV, MNT, AVA - Philips & AOC)",
            "Ticket and incident documentation",
            "Customer communication in English (UKI&I market)"
          ],
        }
      ],
      highlights: [
        {
          title: "AI Voicebot Project",
          description: "AI solution development in production environment"
        },
        {
          title: "International Work",
          description: "UKI&I market - daily English communication"
        },
        {
          title: "Log Analysis",
          description: "Diagnostics and system problem solving"
        }
      ]
    },
    education: {
      title: 'Education & Certificates',
      school: {
        name: 'Akademia Jakości Polskiej',
        location: 'Gorzów Wielkopolski',
        field: 'Field:',
        fieldValue: 'Computer Science',
        status: 'Status:',
        statusValue: 'Student',
        focus: 'Focus:',
        focusValue: 'Programming, Databases, AI',
        description: 'Actively combining theory with practice, using academic knowledge in real commercial projects.'
      },
      certifications: {
        ccna: {
          title: 'CCNA 1 & CCNA 2',
          subtitle: 'Cisco Certified Network Associate',
          organization: '📚 Akademia Jakości Polskiej in Gorzów Wielkopolski',
          tags: ['Networking', 'Routing & Switching']
        },
        productAI: {
          title: 'Product AI Manager',
          subtitle: 'AI Product Management Certification',
          organization: '📚 Microsoft',
          tags: ['AI', 'Product Management', 'Machine Learning']
        }
      },
      continuous: {
        title: 'Continuous Development',
        description: 'Actively expanding knowledge through online courses, personal projects, and practical experience working with modern technologies (Python, Django, AI).'
      },
      keyCompetencies: {
        title: 'Key Competencies from Certifications',
        networking: {
          title: 'Networking',
          description: 'Knowledge of network protocols, routing and switching (CCNA)'
        },
        ai: {
          title: 'AI & ML',
          description: 'AI product management, ML solution implementation'
        },
        product: {
          title: 'Product Management',
          description: 'Product strategy, requirements analysis, roadmapping'
        }
      }
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies I work with daily',
      categories: {
        backend: 'Backend & Frameworks',
        frontend: 'Frontend',
        ai: 'AI & Automation',
        other: 'Other Technologies',
      },
      softSkillsTitle: 'Soft Skills',
      techStack: 'Technology Stack',
      softSkillsList: [
        { name: "Fast Learning", icon: "🚀" },
        { name: "English Language", icon: "🌍" },
        { name: "Teamwork", icon: "👥" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Communication", icon: "💬" },
        { name: "Adaptability", icon: "🎯" }
      ]
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Selected works showcasing my skills',
      viewMore: 'View more projects on GitHub',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      features: 'Key Features:',
      workProject: 'Work Project',
      list: [
        {
          title: "Hydrotechjs.pl",
          description: "Professional website for a hydraulic company with modern design and full business functionality.",
          features: [
            "Responsive design adapted to all devices",
            "Gallery of completed projects with effects",
            "Contact form with validation",
            "Google Maps integration",
            "SEO optimization for better visibility",
            "Social media links"
          ]
        },
        {
          title: "Student Excuses",
          description: "Interactive web application in Django for managing and rating creative student excuses.",
          features: [
            "Ranking system for best excuses",
            "Random excuse generation for inspiration",
            "Django admin panel",
            "User login and registration system",
            "Ability to add new excuses",
            "User voting system (upvote/downvote)",
            "Backend with REST API"
          ]
        },
        {
          title: "AI Voicebot Project",
          description: "Voicebot project using artificial intelligence to automate technical support processes in production environment.",
          features: [
            "Speech recognition in English",
            "Intelligent responses based on NLP",
            "Integration with support systems",
            "Conversation sentiment analysis",
            "Automatic issue escalation",
            "Reporting and analytics"
          ]
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have a project or question? Write to me!',
      info: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      availability: 'Availability',
      availableText: 'I am open to new collaboration opportunities, freelance projects, and exciting technological challenges.',
      availableStatus: 'Available for Contact',
      form: {
        title: 'Send a Message',
        name: 'Full Name',
        namePlaceholder: 'John Doe',
        email: 'Email',
        emailPlaceholder: 'john.doe@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message Subject',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        send: 'Send Message',
        sending: 'Sending...',
        success: '✅ Message sent successfully!',
      }
    },
    footer: {
      description: 'Creating modern web and AI solutions with passion for technology.',
      quickLinks: 'Quick Links',
      socialMedia: 'Social Media',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      using: 'using React & Tailwind CSS',
    },
    visitorCounter: {
      label: 'Visits:',
    }
  }
};

export type Language = 'pl' | 'en';
export type TranslationKey = typeof translations.pl;
