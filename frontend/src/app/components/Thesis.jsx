import styles from '../styles/components/Thesis.module.css';

export default function Thesis() {
  return (
    <section className={styles.section} id="thesis">
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Bachelor thesis</span>
          <h2 className={styles.title}>
            Performance Impact of Authenticated Encryption Algorithms on Latency
          </h2>
          <p className={styles.description}>
            A quantitative study comparing AES-GCM and ChaCha20-Poly1305 in near real-time TCP
            message-based communication. The experiment used a Python client-server testbed and
            60,000 latency measurements across multiple JSON payload sizes.
          </p>
          <div className={styles.facts} aria-label="Thesis highlights">
            <span>Python</span>
            <span>AES-GCM</span>
            <span>ChaCha20-Poly1305</span>
            <span>60,000 measurements</span>
          </div>
          <div className={styles.actions}>
            <a
              href="/assets/BachelorThesis_AES_ChaCha20_Onamu_Nilsson.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Read thesis
            </a>
            <a
              href="https://github.com/HugNil/AES-GCM_vs_ChaCha20-Poly1305"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              GitHub
            </a>
          </div>
        </div>

        <a
          href="/assets/BachelorThesis_AES_ChaCha20_Onamu_Nilsson.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.preview}
          aria-label="Read the bachelor thesis PDF"
        >
          <img
            src="/optimized/bachelor-thesis-aes-chacha20-cover.png"
            alt=""
            loading="lazy"
            decoding="async"
            className={styles.cover}
          />
        </a>
      </div>
    </section>
  );
}
