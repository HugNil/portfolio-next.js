// src/app/components/ProjectCard.jsx
import styles from '../styles/components/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  // Always use `project.image` for the overview card (even if `images` exists)
  const cover = project.image || (project.images && project.images.length > 0 ? project.images[0] : '');
  const encodedCover = cover ? encodeURI(cover) : '';

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url("${encodedCover}")` }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.hoverContent}>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.technologies}>
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className={styles.moreCount}>
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
