// src/app/layout.js
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Min Portfolio',
  description: 'En ljus, tidlös portfolio byggd med Next.js',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
