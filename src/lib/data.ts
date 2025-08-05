import { Github, Linkedin, Twitter } from 'lucide-react';

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process.",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A responsive web app for managing tasks, with features like drag-and-drop, due dates, and project boards.",
    tags: ["Vue.js", "Firebase", "SCSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task list",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase projects and skills, built with a focus on design and performance.",
    tags: ["React", "Gatsby", "Styled Components"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "personal website",
    liveUrl: "#",
    sourceUrl: "#",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "SQL",
  "NoSQL",
  "GraphQL",
  "Docker",
  "CI/CD",
  "Figma",
];
