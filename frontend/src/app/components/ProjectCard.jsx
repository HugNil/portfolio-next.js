// src/app/components/ProjectCard.jsx
import styles from '../styles/components/ProjectCard.module.css';

export default function ProjectCard({ project, index = 0, onSelect }) {
  const cover = project.image || (project.images && project.images.length > 0 ? project.images[0] : '');
  const encodedCover = cover ? encodeURI(cover) : '';
  const primaryTech = project.technologies?.[0] || 'Project';
  const visibleTech = project.technologies?.slice(0, 4) || [];
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);
  const cardContent = (
    <>
      <div className={styles.media}>
        {encodedCover && (
          <img src={encodedCover} alt="" className={styles.image} loading="lazy" decoding="async" />
        )}
        <div className={styles.mediaShade} />
        <span className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.category}>{primaryTech}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.headingRow}>
          <h3 className={styles.title}>{project.title}</h3>
          {hasLinks && <span className={styles.status}>View</span>}
        </div>

        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}

        {visibleTech.length > 0 && (
          <div className={styles.technologies}>
            {visibleTech.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
            {project.technologies.length > visibleTech.length && (
              <span className={styles.moreCount}>
                +{project.technologies.length - visibleTech.length}
              </span>
            )}
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.cta}>Open project</span>
          <span className={styles.arrow} aria-hidden="true">-&gt;</span>
        </div>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button type="button" className={styles.card} onClick={onSelect}>
        {cardContent}
      </button>
    );
  }

  return (
    <article className={styles.card}>
      {cardContent}
    </article>
  );
}
