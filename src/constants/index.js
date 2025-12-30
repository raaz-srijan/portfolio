import React from 'react';
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiPrisma,
  SiDocker, SiGit, SiRedis, SiAmazonwebservices, SiVercel,
  SiShadcnui,
  SiChartdotjs,
  SiMysql,
  SiMui
} from 'react-icons/si';

import { hosp1, hosp2, hosp3, hosp4, book1, book2, book3, book4 } from './images';

export const PERSONAL_INFO = {
  name: "Srijan Raj Shakya",
  role: "Full-Stack Developer",
  bio: `Building scalable SaaS platforms and enterprise systems with robust backend architecture, role-based access control, and production-ready code. I specialize in multi-tenant systems, secure authentication, and real-world business logic that powers modern applications.`,
  email: "srijannospace@gmail.com",
  location: "Kathmandu, Nepal",
  github: "https://github.com/raaz-srijan",
  linkedin: "https://linkedin.com/in/srijanshakya0309",
  instagram: "https://instagram.com/srrrrriiiiiii",
};

export const PROJECTS = [
  {
    id: "inventory mgmt",
    title: "Inventory-mgmt",
    category: "Full-Stack Enterprise SaaS",
    description: "A high-end multi-tenant inventory management system with real-time tracking and automated audit logs.",
    images: ["/assets/projects/prostock.png"],
    techStack: {  stack: ["Node.js", "PostgreSQL", "React", "Tailwind", "Redux"], },
    github: "https://github.com/raaz-srijan/inventory-mgmt_postgreSQL",
    live:"https://www.google.com",
  },
  {
    id: "hms",
    title: "Healing Hands Hospital",
    category: "Full-Stack Web Application",
    description: "A comprehensive hospital management system handling workflows, appointments, and analytics.",
    images: [hosp1, hosp2, hosp3, hosp4],
    techStack: { stack: ["Node.js", "MongoDB", "React", "TypeScript", "Tailwind", ] },
    github: "https://github.com/raaz-srijan/hospital-management-system",
    live:"https://healing-hands-hosp.netlify.app/",
  },
  {
    id: "breeze-books",
    title: "Breeze & Books",
    category: "Full-Stack E-Commerce",
    description: "A luxurious online bookstore platform with secure payments and inventory management.",
    images: [book4, book1, book2, book3, ],
    techStack: { stack: ["React", "Redux "],  },
    github: "https://github.com/raaz-srijan/Breeze-and-Books",
    live:"https://breeze-and-books.netlify.app/"
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux Toolkit", icon: SiRedux }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Material UI", icon: SiMui, }
    ]
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
