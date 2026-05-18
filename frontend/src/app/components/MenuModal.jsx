// filepath: c:\Users\02hug\Desktop\portfolio-react\frontend\src\app\components\MenuModal.jsx
import styles from '../styles/components/MenuModal.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuModal({ isOpen, onClose }) {
  // Handle CV download with confirmation
  const handleDownloadCV = (e) => {
    e.preventDefault();
    if (window.confirm('Do you want to download Hugo Nilssons CV?')) {
      const link = document.createElement('a');
      link.href = '/assets/Hugo Nilsson CV.pdf';
      link.download = 'Hugo Nilsson CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    onClose();
  };

  // Close menu when pressing Escape key or clicking outside
  useEffect(() => {
    const handleEscKey = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e) => {
      // Check if the click is outside the menu
      const menuElement = document.querySelector(`.${styles.overlay}`);
      const hamburgerElement = document.querySelector('[class*="hamburger"]');
      
      if (isOpen && menuElement && !menuElement.contains(e.target) && 
          hamburgerElement && !hamburgerElement.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    window.addEventListener('mousedown', handleClickOutside);
    
    // Note: We no longer prevent scrolling when the menu is open
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div 
            className={styles.overlay}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.5 
            }}
          >
            <motion.div 
              className={styles.menuFirst}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <ul>
                {['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.1 + index * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 5, 
                      transition: { duration: 0.2 } 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >                    <Link 
                      href={item === 'HOME' ? '/' : `#${item.toLowerCase()}`} 
                      onClick={(e) => {
                        if (item === 'HOME') {
                          e.preventDefault();
                          onClose();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                          window.history.pushState({}, '', '/');
                        } else {
                          e.preventDefault();
                          onClose();
                          const targetElement = document.getElementById(item.toLowerCase());
                          if (targetElement) {
                            targetElement.scrollIntoView({
                              behavior: 'smooth'
                            });
                          }
                        }
                      }}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className={styles.menuSecond}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <ul>
                {[
                  { name: 'RESUMÉ', href: '/assets/Hugo Nilsson CV.pdf', download: true },
                  { name: 'GITHUB', href: 'https://github.com/hugnil', external: true },
                  { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/hugo-nilsson-80b33621b/sv/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BugARs1P5T3KZPyOfrkYEvQ%3D%3D', external: true },
                  { name: 'EMAIL', href: 'mailto:hugo.nilsson0002@gmail.com' }
                ].map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.download ? (
                      <a
                        href={item.href}
                        onClick={handleDownloadCV}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
