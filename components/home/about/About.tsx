import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Howdy! I&apos;m Abdalrahman Midani, I am a highly skilled web
              developer with a passion for creating exceptional digital
              experiences. My journey in software engineering has equipped me
              with expertise in full-stack development, encompassing a wide
              range of technologies, including HTML, CSS, Bootstrap, VueJS,
              JavaScript, and Laravel.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My approach to web development is driven by a strong commitment to
              user-centric design. I believe that the fusion of technical
              excellence and captivating design is the key to crafting websites
              that not only function flawlessly but also captivate and engage
              users.
              <br />
              Throughout my career, I have taken on a multitude of challenging
              web development projects, from designing responsive front-end
              interfaces that prioritize user experience to architecting robust
              back-end systems that ensure optimal functionality.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am well-versed in harnessing data-driven insights to enhance
              websites. Proficient in tools such as Google Analytics and Google
              Tag Manager, I continuously refine and optimize websites, ensuring
              they perform at their best and deliver superior user satisfaction.
              <br />
              Problem-solving is a core strength that defines my professional
              journey. I thrive in dynamic environments, embracing challenges as
              opportunities to innovate and find creative solutions to intricate
              problems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am enthusiastic about the prospect of collaborating with fellow
              professionals and contributing to meaningful web development
              projects. Please feel free to connect with me, and let&apos;s
              explore how we can work together to create outstanding digital
              solutions. 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
