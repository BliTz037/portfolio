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
  profilePicture: "/profil.jpg",
  cvUrl: "https://cv.tomrives.me",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tom-rives/",
      icon: LinkedInLogoIcon,
    },
    {
      name: "GitHub",
      url: "https://github.com/BliTz037",
      icon: GitHubLogoIcon,
    },
    {
      name: "Medium",
      url: "https://medium.com/@tomrives",
      icon: FileTextIcon,
    },
    {
      name: "Mail",
      url: "mailto:contact@tomrives.me",
      icon: EnvelopeClosedIcon,
    },
  ],
  aboutMe: [
    "👨‍💻 I'm a Backend Engineer",
    "🎓 Epitech Alumni promo 2024",
    "❤️ I love API",
    "🐧 I like Penguin",
    "🚂 I love Thomas The Tank Engine",
  ],
  skills: [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "NestJS",
    "ExpressJS",
    "MongoDB",
    "Jest",
    "Python",
    "PHP",
    "Bash",
    "Docker",
    "PostgreSQL",
    "Swift",
  ],
  projects: [
    {
      title: "GamePing",
      techStack: ["Swift", "SwiftUI", "NWConnection"],
      description: `GamePing is the easiest way to keep track of your favorite game servers. Monitor server status in real time across more than twenty supported games whether local or worldwide`,
      logo: "/gameping.png",
      link: {
        label: "apps.apple.com",
        href: "https://apps.apple.com/us/app/gameping/id6751515425",
      },
    },
    {
      title: "Game Server Tracker - API",
      techStack: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "PostgreSQL",
        "Grafana",
        "Github Action",
      ],
      description: `A public API which shows several information on a server Minecraft / Game using Source Engine (Gmod, CS, CSGO) / FiveM.`,
      logo: "/gst_icon.png",
      link: {
        label: "github.com",
        href: "https://www.gameservertracker.io/",
      },
    },
  ],
};
