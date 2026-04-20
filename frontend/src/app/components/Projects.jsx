'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projects from '../data/projects.json';
import styles from '../styles/components/Projects.module.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Selected work</span>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>
            A quick look at the apps, school projects and experiments I have built.
          </p>
        </div>

        <div className={`${styles.grid} ${showAllProjects ? styles.gridExpanded : ''}`}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectItem}>
              <ProjectCard
                project={project}
                index={index}
                onSelect={() => handleProjectClick(project)}
              />
            </div>
          ))}
        </div>

        {projects.length > 5 && (
          <button
            type="button"
            className={styles.viewMoreButton}
            onClick={() => setShowAllProjects((current) => !current)}
          >
            {showAllProjects ? 'Show less' : 'View more projects'}
          </button>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
}
