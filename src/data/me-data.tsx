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
  profilePicture: "/profile.jpg",
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
};
