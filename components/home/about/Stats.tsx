import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Hard Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">SCSS</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Reactjs</span>
            <span className="chip">Vuejs</span>
            <span className="chip">Quasar</span>
            <span className="chip">Git</span>
            <span className="chip">Laravel</span>
            <span className="chip">C/C++</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Web3</span>
            <span className="chip">PWA</span>
            <span className="chip">Microsoft Office</span>
            <span className="chip">Adobe Illustrator</span>
            <span className="chip">Adobe XD</span>
            <span className="chip">Google Web Designer</span>
            <span className="chip">Google Tag Manager</span>
            <span className="chip">Google Analytics</span>
            <span className="chip">Content Management</span>
            <span className="chip">SEO</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Soft Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Organizational</span>
            <span className="chip">Teamwork</span>
            <span className="chip">Problem-solving</span>
            <span className="chip">Time management</span>
            <span className="chip">Self-motivation</span>
            <span className="chip">Brainstorming</span>
            <span className="chip">Decision making</span>
            <span className="chip">Idea exchange</span>
            <span className="chip">Mind-mapping</span>
            <span className="chip">Multitasking</span>
            <span className="chip">Strategic thinking</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
