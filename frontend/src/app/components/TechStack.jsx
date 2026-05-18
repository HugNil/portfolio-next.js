'use client';

import styles from '../styles/components/TechStack.module.css';
import techStack from "../data/stack.json";
import { useState } from 'react';

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const learningCategory = techStack.find((category) => category.category === 'Currently Learning');
  const stackCategories = techStack.filter((category) => category.category !== 'Currently Learning');

  return (
    <section className={styles.stackSection} id="tech-stack">
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Tools</span>
        <h2 className={styles.stackTitle}>Tech Stack</h2>
        {learningCategory && (
          <div className={styles.learningStrip} aria-label="Currently learning">
            <span className={styles.learningLabel}>
              <span>Currently</span>
              <span>Learning</span>
            </span>
            <div className={styles.learningItems}>
              {learningCategory.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={styles.learningItem}
                  onMouseEnter={() => setHoveredTech(`${learningCategory.category}-${tech.name}`)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <img
                    src={tech.img}
                    alt=""
                    className={styles.learningImg}
                    loading="lazy"
                    decoding="async"
                  />
                  {tech.name}
                  {hoveredTech === `${learningCategory.category}-${tech.name}` && (
                    <span className={styles.techTooltip}>
                      <span>{tech.name}</span>
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className={styles.stack}>
        {stackCategories.map((category, index) => (
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
                      loading="lazy"
                      decoding="async"
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

      <a
        href="https://devicon.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconCredit}
      >
        Icons by Devicon
      </a>
    </section>
  );
};
