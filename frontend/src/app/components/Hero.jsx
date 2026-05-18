// src/app/components/Hero.jsx
'use client';

import Link from 'next/link';
import styles from '../styles/components/Hero.module.css';

export default function Hero() {
  const images = [
    '/optimized/assets-img20240703130257-edit-edit-edit.webp',
    '/optimized/assets-img-20190215-162733.webp',
    '/optimized/assets-img-20191122-165346.webp',
    '/optimized/assets-img-20220629-205602.webp',
    '/optimized/assets-img-20230617-124039.webp',
    '/optimized/assets-img-20190212-150838.webp',
    '/optimized/assets-img20240703125715.webp',
    '/optimized/assets-img-20230618-154142.webp'
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
            <img
              src={img}
              alt=""
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index < 2 ? 'high' : 'low'}
            />
          </div>
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.name}>Hugo Nilsson</p>
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
          <p className={styles.kicker}>Based in Skåne, Sweden</p>
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
