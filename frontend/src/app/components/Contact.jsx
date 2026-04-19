'use client';

import styles from '../styles/components/Contact.module.css';
import EmailIcon from '../assets/new-post-64.png';

export default function Contact() {
  return (
    <section className={styles.section} id='contact'>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Contact</span>
        <h2 className={styles.heading}>Reach out.</h2>
        <p className={styles.text}>Want to talk projects, studies or opportunities? I am easy to find.</p>
        <article className={styles.socialLinks}>
          <a href="mailto:youremail@example.com" className={styles.link}><img src={EmailIcon.src} alt="Email" /></a>
          <a href="https://github.com/hugnil" target="_blank" rel="noopener noreferrer" className={styles.link}><i style={{ fontSize: '48px' }} className="devicon-github-original"></i></a>
          <a href="https://www.linkedin.com/in/hugo-nilsson-80b33621b/?locale=sv_SE" target="_blank" rel="noopener noreferrer" className={styles.link}><i style={{ fontSize: '48px' }} className="devicon-linkedin-plain"></i></a>
        </article>   
      </div>
    </section>
  );
}
