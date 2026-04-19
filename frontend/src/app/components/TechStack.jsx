'use client';

import styles from '../styles/components/TechStack.module.css';
import techStack from "../data/stack.json";
import { useState } from 'react';

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className={styles.stackSection} id="tech-stack">
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Tools</span>
        <h2 className={styles.stackTitle}>Tech Stack</h2>
      </div>
      
      <div className={styles.stack}>
        {techStack.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.stackCardSection}>
              {category.tech.map((tech, techIndex) => (
                <div 
                  key={techIndex} 
                  className={styles.stackCard}
                  onMouseEnter={() => setHoveredTech(`${category.category}-${tech.name}`)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className={styles.techImageContainer}>
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className={styles.techImg}
                    />
                  </div>
                  <span className={styles.techName}>
                    {tech.name}
                  </span>                  {hoveredTech === `${category.category}-${tech.name}` && (
                    <div className={styles.techTooltip}>
                      <p style={{color: "#ffffff"}}>{tech.name}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
