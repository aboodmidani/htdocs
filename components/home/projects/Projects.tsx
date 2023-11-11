import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
      <div>
        <Reveal width="100%">
          <StandardButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abdalrahman-midani-70b490195/details/projects/"
              )
            }
          >
            More Projects..
          </StandardButton>
        </Reveal>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Tonbanking",
    imgSrc: "/project-imgs/tonb.png",
    code: "https://github.com/aboodmidani",
    projectLink: "https://tonb.io/",
    tech: [
      "HTML",
      "SCSS",
      "TypeScript",
      "VueJS",
      "Quasar",
      "Vite",
      "Web3",
      "PWA",
    ],
    description:
      "Advanced blockchain banking infrastructure inside the Telegram messenger.",
    modalContent: (
      <>
        <p>
          Role: Full-stack.
          <br />
          Technologies: HTML - SCSS - TypeScript - VueJS - Quasar - Vite - Web3
          - PWA.
        </p>
      </>
    ),
  },
  {
    title: "Codiay",
    imgSrc: "/project-imgs/codiay.png",
    code: "https://github.com/aboodmidani",
    projectLink: "https://codiay.com/",
    tech: ["HTML", "SCSS", "JavaScript", "VueJS", "Quasar", "PWA"],
    description:
      "Bridging the Gap Between Tech and Media, Empowering Businesses for the Future.",
    modalContent: (
      <>
        <p>
          Role: Front-end.
          <br />
          Technologies: HTML - SCSS - JavaScript - VueJS - Quasar - PWA.
        </p>
      </>
    ),
  },
  {
    title: "Ramous",
    imgSrc: "/project-imgs/ramous.png",
    code: "https://github.com/aboodmidani",
    projectLink: "https://ramous-fm.com/",
    tech: ["HTML", "SCSS", "JavaScript", "VueJS", "Quasar", "PWA"],
    description:
      "RAMOUS for facilities management is the ultimate CAFM/CMMS solution for asset management.",
    modalContent: (
      <>
        <p>
          Role: Full-stack.
          <br />
          Technologies: HTML - SCSS - JavaScript - VueJS - Quasar - PWA
        </p>
      </>
    ),
  },
  {
    title: "Almooryaat",
    imgSrc: "/project-imgs/alm.png",
    code: "https://github.com/aboodmidani",
    projectLink: "http://almooryaat.net/",
    tech: ["HTML", "SCSS", "JavaScript", "VueJS", "Quasar", "PWA"],
    description: "Esports Club.",
    modalContent: (
      <>
        <p>
          Role: Full-stack.
          <br />
          Technologies: HTML - SCSS - JavaScript - VueJS - Quasar - PWA
        </p>
      </>
    ),
  },
  {
    title: "Saudi Auto Show",
    imgSrc: "/project-imgs/saudiauto.png",
    code: "https://github.com/aboodmidani",
    projectLink: "https://saudiautoshow.net",
    tech: ["HTML", "SCSS", "JavaScript", "VueJS", "Quasar", "Laravel", "PWA"],
    description:
      "Saudi Auto Show is one of the most prominent events in Saudi Arabia, which offers to cars lovers and consumers the latest advanced technologies with a lot of insurance and financing solutions to buy a new car.",
    modalContent: (
      <>
        <p>
          Role: Full-stack.
          <br />
          Technologies: HTML - SCSS - JavaScript - VueJS - Quasar - Laravel -
          PWA
        </p>
      </>
    ),
  },
  {
    title: "Eptico",
    imgSrc: "/project-imgs/eptico.png",
    code: "https://github.com/aboodmidani",
    projectLink: "http://www.eptico.com/",
    tech: ["HTML", "CSS", "BootStrap", "JavaScript"],
    description:
      "Eptico was incorporated in 2007 and it became one of the most important specialized corporations in external facades and interior designs.",
    modalContent: (
      <>
        <p>
          Role: Front-end.
          <br />
          Technologies: HTML - CSS - BootStrap - JavaScript.
        </p>
      </>
    ),
  },
];
