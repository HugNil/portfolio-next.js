'use client';

import { useEffect, useRef } from 'react';
import styles from '../styles/components/ContactSnake.module.css';

const contactNodes = [
  { label: 'Email', href: 'mailto:youremail@example.com', top: '18%' },
  { label: 'GitHub', href: 'https://github.com/hugnil', top: '37%' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hugo-nilsson-80b33621b/?locale=sv_SE', top: '58%' },
  { label: 'Resumé', href: '/assets/Hugo Nilsson CV.pdf', top: '73%' }
];

export default function ContactSnake() {
  const snakeRef = useRef(null);

  useEffect(() => {
    const snake = snakeRef.current;
    if (!snake || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let frameId = null;

    const updateScrollMotion = () => {
      frameId = null;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      snake.style.setProperty('--snake-flow', `${progress * -100}px`);
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollMotion);
      }
    };

    updateScrollMotion();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <nav ref={snakeRef} className={styles.snake} aria-label="Quick contact links">
      <svg className={styles.line} viewBox="0 0 72 720" preserveAspectRatio="none" aria-hidden="true">
        <path
          className={styles.shadowPath}
          d="M36 0 C68 72 4 132 36 204 C68 276 4 336 36 408 C68 480 4 540 36 612 C58 660 44 696 36 720"
        />
        <path
          className={styles.mainPath}
          d="M36 0 C68 72 4 132 36 204 C68 276 4 336 36 408 C68 480 4 540 36 612 C58 660 44 696 36 720"
        />
      </svg>

      {contactNodes.map((node, index) => (
        <a
          key={node.label}
          className={`${styles.node} ${index % 2 === 0 ? styles.nodeLeft : styles.nodeRight}`}
          style={{ top: node.top }}
          href={node.href}
          target={node.href.startsWith('http') ? '_blank' : undefined}
          rel={node.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <span className={styles.dot} />
          <span className={styles.label}>{node.label}</span>
        </a>
      ))}
    </nav>
  );
}
