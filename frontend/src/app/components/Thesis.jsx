'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/components/Thesis.module.css';

export default function Thesis() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isPreviewOpen]);

  const closePreview = () => setIsPreviewOpen(false);

  return (
    <>
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
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className={styles.primaryLink}
              >
                Preview thesis
              </button>
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

          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className={styles.preview}
            aria-label="Preview the bachelor thesis"
          >
            <img
              src="/optimized/bachelor-thesis-aes-chacha20-cover.png"
              alt=""
              loading="lazy"
              decoding="async"
              className={styles.cover}
            />
          </button>
        </div>
      </section>

      {isPreviewOpen && (
        <div className={styles.overlay} onClick={closePreview}>
          <article
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="thesis-preview-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closePreview}
              aria-label="Close thesis preview"
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.eyebrow}>Thesis preview</span>
              <h2 id="thesis-preview-title" className={styles.modalTitle}>
                Performance impact of authenticated encryption on latency
              </h2>
              <p className={styles.modalLead}>
                A controlled experiment comparing AES-GCM and ChaCha20-Poly1305 for small,
                frequent messages in near real-time TCP communication.
              </p>
            </div>

            <div className={styles.modalBody}>
              <aside className={styles.summaryPanel} aria-label="Thesis summary">
                <img
                  src="/optimized/bachelor-thesis-aes-chacha20-cover.png"
                  alt=""
                  className={styles.previewCover}
                  loading="lazy"
                  decoding="async"
                />
                <dl className={styles.stats}>
                  <div>
                    <dt>Measurements</dt>
                    <dd>60,000</dd>
                  </div>
                  <div>
                    <dt>Payloads</dt>
                    <dd>128, 512, 2048 B</dd>
                  </div>
                  <div>
                    <dt>Environment</dt>
                    <dd>Python TCP testbed</dd>
                  </div>
                </dl>
              </aside>

              <div className={styles.previewContent}>
                <section className={styles.previewSection}>
                  <h3>Research question</h3>
                  <p>
                    How do AES-GCM and ChaCha20-Poly1305 affect end-to-end latency when messages
                    are encrypted, sent, verified, decrypted and acknowledged at application level?
                  </p>
                </section>

                <section className={styles.previewSection}>
                  <h3>Experiment design</h3>
                  <p>
                    The study used synthetic JSON messages in a controlled TCP client-server setup.
                    Each configuration was repeated across message sizes and analyzed with
                    descriptive statistics, confidence intervals and Welch's t-test.
                  </p>
                </section>

                <section className={styles.findingSection}>
                  <span className={styles.findingLabel}>Main result</span>
                  <p>
                    AES-GCM achieved lower mean latency in the tested x86 environment, likely due
                    to AES-NI hardware acceleration. Both algorithms still delivered very low
                    sub-millisecond response times.
                  </p>
                </section>
              </div>
            </div>

            <div className={styles.modalActions}>
              <a
                href="/assets/BachelorThesis_AES_ChaCha20_Onamu_Nilsson.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                Open full PDF
              </a>
              <a
                href="https://github.com/HugNil/AES-GCM_vs_ChaCha20-Poly1305"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                View code
              </a>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
