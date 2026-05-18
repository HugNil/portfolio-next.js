'use client';

import styles from '../styles/components/ContactSnake.module.css';

const contactNodes = [
  { label: 'Email', href: 'mailto:youremail@example.com', top: '18%' },
  { label: 'GitHub', href: 'https://github.com/hugnil', top: '37%' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hugo-nilsson-80b33621b/?locale=sv_SE', top: '58%' },
  { label: 'CV', href: '/assets/Hugo Nilsson CV.pdf', top: '78%' }
];

export default function ContactSnake() {
  return (
    <nav className={styles.snake} aria-label="Quick contact links">
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
