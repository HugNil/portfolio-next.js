"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/components/ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  const thumbnails = Array.isArray(project.images) ? project.images.filter(Boolean) : [];
  const references = Array.isArray(project.references) ? project.references.filter(Boolean) : [];
  const [selectedImage, setSelectedImage] = useState(
    (thumbnails.length > 0 ? thumbnails[0] : (project.image || ''))
  );
  const [preferContain, setPreferContain] = useState(false);

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalHeight / naturalWidth > 1.15) {
      setPreferContain(true);
    } else {
      setPreferContain(false);
    }
  };

  useEffect(() => {
    setSelectedImage(thumbnails.length > 0 ? thumbnails[0] : (project.image || ''));
    setPreferContain(false);
  }, [project]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button className={styles.closeButton} onClick={onClose} aria-label="Close project">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.layout}>
          <div className={styles.gallery}>
            <div className={styles.imageShell}>
              <img
                src={selectedImage ? encodeURI(selectedImage) : ''}
                alt={project.title}
                className={`${styles.headerImage} ${preferContain ? styles.headerImageContain : ''}`}
                onLoad={handleImageLoad}
                decoding="async"
              />
            </div>

            {thumbnails && thumbnails.length > 1 && (
              <div className={styles.thumbnails} aria-label="Project images">
                {thumbnails.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    className={`${styles.thumbnailButton} ${selectedImage === img ? styles.thumbnailActive : ''}`}
                    onClick={() => setSelectedImage(img)}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img
                      src={img ? encodeURI(img) : ''}
                      alt=""
                      className={styles.thumbnail}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>Project details</span>
            <h2 id="project-modal-title" className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.longDescription}</p>

            <div className={styles.quickFacts}>
              {project.technologies?.[0] && (
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Stack</span>
                  <span className={styles.factValue}>{project.technologies[0]}</span>
                </div>
              )}
              {project.contributors && project.contributors.length > 0 && (
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Team</span>
                  <span className={styles.factValue}>
                    {project.contributors.length === 1 ? 'Solo project' : `${project.contributors.length} people`}
                  </span>
                </div>
              )}
              {project.features && project.features.length > 0 && (
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Highlights</span>
                  <span className={styles.factValue}>{project.features.length}</span>
                </div>
              )}
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Technologies</h3>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Features</h3>
                <ul className={styles.features}>
                  {project.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.contributors && project.contributors.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Contributors</h3>
                <p className={styles.contributorText}>
                  {project.contributors.join(', ')}
                </p>
              </div>
            )}

            <div className={styles.links}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  Live demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButtonSecondary}
                >
                  GitHub
                </a>
              )}
              {project.documentUrl && (
                <a
                  href={project.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButtonSecondary}
                >
                  Read thesis
                </a>
              )}
            </div>

            {references.length > 0 && (
              <div className={styles.creditsSection}>
                <h3 className={styles.sectionTitle}>Credits</h3>
                <ul className={styles.references}>
                  {references.map((reference, index) => {
                    const label = typeof reference === 'string' ? reference : reference.label;
                    const attribution = typeof reference === 'string' ? '' : reference.attribution;
                    const url = typeof reference === 'string' ? '' : reference.url;
                    const note = typeof reference === 'string' ? '' : reference.note;
                    const visibleLabel = label || attribution || 'Reference';

                    return (
                      <li key={`${visibleLabel}-${index}`} className={styles.reference}>
                        {attribution && (
                          <span className={styles.referenceAttribution}>{attribution}</span>
                        )}
                        {!attribution && (
                          url && label ? (
                            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.referenceLink}>
                              {label}
                            </a>
                          ) : (
                            <span className={styles.referenceLabel}>{visibleLabel}</span>
                          )
                        )}
                        {note && <span className={styles.referenceNote}>{note}</span>}
                        {attribution && url && (
                          <a href={url} target="_blank" rel="noopener noreferrer" className={styles.referenceSource}>
                            Source
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
