import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "TONBanking.",
    position: "Full-Stack Engineer 'Remote'",
    time: "Mar 2023 - Present",
    location: "Dubai, United Arab Emirates",
    description: [
      "• Actively contribute to the development of a cutting-edge Web3 project on the Ton network.",
      "• Proficiency in frontend and backend technologies Deep knowledge of Ton network and Web3 architecture.",
      "• Engage in project development from design to deployment and maintenance.",
      "• Collaborate closely with cross-functional teams.",
      "• Focus on software reliability, efficiency, and user-friendliness.",
    ],
    tech: [
      "HTML",
      "SCSS",
      "VueJS",
      "Quasar",
      "PWA",
      "Git",
      "Vite",
      "Web3",
      "Google Tag Manager",
      "Google Analytics",
    ],
  },
  {
    title: "Codiay.",
    position: "Head of Developers 'Remote'",
    time: "Jan 2021 - Present",
    location: "Amsterdam, Netherlands",
    description: [
      "• Led a collaborative approach to project management as the Head of Developers at Codiay.",
      "• Evaluated client websites for mobile performance and optimal search engine rankings.",
      "• Worked closely with clients to gain a deep understanding of their needs and objectives.",
      "• Planned, developed, tested, deployed, and maintained web applications.",
      "• Specialized in web3 development, SaaS projects, and blockchain solutions.",
    ],
    tech: ["HTML", "SCSS", "VueJS", "Quasar", "PWA", "Git"],
  },
  {
    title: "Saudi Auto Show.",
    position: "Head of Technical Department 'Remote'",
    time: "Oct 2022 - Oct 2023",
    location: "Riyadh, Saudi Arabia",
    description: [
      "• Managing the website performance and inspecting the integrated data of register and contact forms and supporting the whole company sections in the technical things.",
      "• Ensured that installations were carried out according to rules and guidelines.",
      "• Properly addressed issues related to production, machinery, and tools.",
      "• Collaborated with other departments to achieve continuous improvement of company systems and give the best UI/UX.",
    ],
    tech: ["HTML", "SCSS", "VueJS", "Quasar", "PWA", "Git", "Google Analytics"],
  },
  {
    title: "Ekar.",
    position: "Laravel Developer 'Internship'",
    time: "Dec 2022 - Mar 2023",
    location: "Riyadh, Saudi Arabia",
    description: [
      "• Developing and maintaining backend systems for specific needs.",
      "• Handle and store data in the database.",
      "• My key responsibilities included writing clean, maintainable, and efficient code, and participating in the full software development lifecycle.",
      "• Troubleshot and debugging any issues that arose in existing applications and kept up to date with the latest web development technologies and trends.",
    ],
    tech: ["PHP", "Laravel"],
  },
  {
    title: "Sallat Hayat.",
    position: "Website Administrator and Products Manger 'Remote'",
    time: "Jan 2021 - May 2021",
    location: "Riyadh, Saudi Arabia",
    description: [
      "• Inspect more than 3000 products, technical support, and problem-solving.",
      "• Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.",
      "• Discussed promotions, products, and anything pertaining to better and more satisfactory service for the customer.",
      "• Monitored supply inventory and ordered more tools and products when necessary.",
    ],
    tech: ["Salla Platform", "HTML", "CSS"],
  },
];
