import styles from '../styles/components/About.module.css';
import Image from 'next/image';
import profilePic from '../assets/profile.jpg';
import TechStack from './TechStack';

export default function About() {
  return (
    <section className={`section ${styles.aboutSection}`} id='about'>
      <div className='container'>
        <div className={styles.header}>
          <span className={styles.eyebrow}>About me</span>
          <h1 className={styles.heading}>Building useful things with care.</h1>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              I hold a Bachelor's degree in Computer Science from Kristianstad University and have a strong passion for technology. I enjoy solving problems, exploring new tools, and learning how things work under the hood. What drives me most is seeing my projects come to life, turning ideas into functional solutions that people can actually use.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image src={profilePic} alt="Profile picture" className={styles.img} width={300} height={300} />
          </div>
        </div>
        <section>
          <TechStack />
        </section>
      </div>
    </section>
  );
}
