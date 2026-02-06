// src/app/components/Hero.jsx
'use client';

import Link from 'next/link';
import styles from '../styles/components/Hero.module.css';

export default function Hero() {
  const images = [
    '/assets/IMG20240703130257-EDIT-EDIT-EDIT.jpg',
    '/assets/IMG_20190215_162733.jpg',
    '/assets/IMG_20191122_165346.jpg',
    '/assets/IMG_20220629_205602.jpg',
    '/assets/IMG_20230617_124039.jpg',
    '/assets/IMG_20190212_150838.jpg',
    '/assets/IMG20240703125715.jpg',
    '/assets/IMG_20230618_154142.jpg'
  ];

  const handleDownloadCV = (e) => {
    e.preventDefault();
    if (window.confirm('Vill du ladda ner Hugo Nilssons CV?')) {
      const link = document.createElement('a');
      link.href = '/assets/Hugo Nilsson CV.pdf';
      link.download = 'Hugo Nilsson CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className={styles.section}>
      {/* Image Grid Background */}
      <div className={styles.imageGrid}>
        {images.map((img, index) => (
          <div key={index} className={`${styles.gridItem} ${styles[`item${index + 1}`]}`}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headerGroup}>
            <h1 id='heading1' className={`${styles.heading} ${styles.heading1}`}>
              SOFTWARE
            </h1>
            <h1 id='heading2' className={`${styles.heading} ${styles.heading2}`}>
              DEVELOPMENT
            </h1>
            <h1 id='heading3' className={`${styles.heading} ${styles.heading3}`}>
              STUDENT
            </h1>
          </div>
          <div className={styles.buttonContainer}>
            <a href="/assets/Hugo Nilsson CV.pdf" onClick={handleDownloadCV}>
              <button className="button-primary" style={{minWidth: '8rem'}}>RESUMÉ</button>
            </a>
            <Link href="#projects">
              <button className="button-primary" style={{minWidth: '8rem'}}>PROJECTS</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
