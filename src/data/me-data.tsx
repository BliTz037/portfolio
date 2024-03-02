import {
  EnvelopeClosedIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const ME_DATA = {
  name: "Tom Rives",
  role: "Backend Engineer",
  company: {
    name: "Withings",
    url: "https://www.withings.com",
  },
  profilePicture: "/profile_2.JPG",
  cvUrl: "https://cv.blitzlab.ninja",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/BliTz037",
      icon: GitHubLogoIcon,
      color: "bg-gray-800",
      colorOnClick: "bg-gray-900",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tom-rives/",
      icon: LinkedInLogoIcon,
      color: "bg-sky-500",
      activeColor: "bg-sky-700",
    },
    {
      name: "Blog",
      url: "https://blog.blitzlab.ninja",
      icon: FileTextIcon,
      color: "bg-indigo-500",
      colorOnClick: "bg-indigo-700",
    },
    {
      name: "Mail",
      url: "mailto:tom.rives@epitech.eu",
      icon: EnvelopeClosedIcon,
      color: "bg-slate-400",
      colorOnClick: "bg-slate-600",
    },
  ],
  aboutMe: [
    "👨‍💻 I'm a backend engineer with a strong focus on API design and development",
    "🎓 Ex-students at @Epitech",
    "❤️ I love API",
    "🚂 I like Thomas The Tank Engine",
    "🏎️ My favorite pilot in Formula 1 is Lewis Hamilton",
  ],
  skills: [
    "C",
    "C++",
    "C#",
    "Python",
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Flutter",
    "Dart",
    "Bash",
    "Node.js",
    "Jest",
    "React.js",
    "NestJS",
    "ExpressJS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Unity",
  ],
  projects: [
    {
      title: "Camille",
      techStack: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "ExpressJS",
        "PostgreSQL",
        "Jest",
        "React Native",
        "Docker",
        "AWS",
      ],
      description:
        "Camille is an mobile application to help people who are in depression. This project was in 2nd place at the Epitech Innovative Project 2024.",
      logo: null,
      link: {
        label: "camille.app",
        href: "https://camille.app/",
      },
    },
    {
      title: "Game Server Tracker - LametricApp",
      techStack: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "ExpressJS",
        "PostgreSQL",
      ],
      description: "A Lametric-App which shows the number of players connected on a server Minecraft / Source (Gmod, CS, CSGO) / FiveM",
      logo: null,
      link: {
        label: "apps.lametric.com",
        href: "https://apps.lametric.com/apps/game_server_tracker/12296",
      },
    },
    {
      title: "Game Server Tracker",
      techStack: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "ExpressJS",
        "PostgreSQL",
        "Grafana",
      ],
      description: `A suite of applications dedicated to monitoring online game server activity.`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/GameServerTracker",
      },
    },
    {
      title: "Whac a Mole VR",
      techStack: [
        "C#",
        "Unity",
        "SteamVR",
      ],
      description: `Arcade-style VR game in which the objective is to hit moles with a hammer when they pop out of holes.`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/Redditech",
      },
    },
    {
      title: "SkulkerSurvivor",
      techStack: [
        "C#",
        "Unity",
      ],
      description: `Basic 3D game survivor`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/SkulkerSurvivor",
      },
    },
    {
      title: "Redditech",
      techStack: [
        "Dart",
        "Flutter",
        "Android",
        "Reddit API"
      ],
      description: `A Reddit client for iOS and Android. That is an Epitech project school.`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/Redditech",
      },
    },
    {
      title: "WeatherForecast",
      techStack: [
        "TypeScript",
        "React.js",
        "TailwindCSS",
        "Vite.js",
        "OpenWeatherMap API"
      ],
      description: `Weather forecast website made with react`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/WeatherForecast",
      },
    },
    {
      title: "Sokoban",
      techStack: [
        "C",
        "Ncurses"
      ],
      description: `Sokoban game made with C and Ncurses`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/my_sokoban",
      },
    },
    {
      title: "my_teams",
      techStack: [
        "C"
      ],
      description: `A client-server application allowing users to create teams, add users to them and send messages between them in CLI`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/myteams",
      },
    },
    {
      title: "nm objdump",
      techStack: [
        "C"
      ],
      description: `Recode the nm and objdump commands in C`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/nmobjdump",
      },
    }
  ],

};
