// src/app/page.js
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import ContactSnake from './components/ContactSnake';
import Contact  from './components/Contact';

export default function HomePage() {
  return (
    <>
      <ContactSnake />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
