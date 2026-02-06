// src/app/projects/[id]/page.js
import fs   from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail({ params }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'src/app/data/projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(jsonData);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container" style={{ padding: '2rem 1rem' }}>
        <p style={{ color: 'var(--color-text-primary)' }}>Projektet hittades inte.</p>
        <Link
          href="/projects"
          style={{ color: 'var(--color-accent-blue)', fontWeight: 500 }}
        >
          ← Tillbaka
        </Link>
      </div>
    );
  }

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container">
        {/* 1) Här är ändringen: Link renderar själv <a> */}
        <Link
          href="/projects"
          style={{ color: 'var(--color-accent-blue)', fontWeight: 500 }}
        >
          ← Tillbaka till projekt
        </Link>

        <h1 style={{
          fontSize: '3rem',
          fontWeight: 600,
          margin: '1rem 0',
          color: 'var(--color-text-primary)'
        }}>
          {project.title}
        </h1>
        <p style={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: 'var(--color-text-secondary)',
          marginBottom: '1.5rem'
        }}>
          {project.description}
        </p>

        <Image
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}
        />

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem'
          }}>
            Tekniker
          </h3>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {project.technologies.map((tech) => (
              <li key={tech} style={{
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Live-demo
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// För att Next ska generera statiskt varje /projects/:id‐sida:
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src/app/data/projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(jsonData);

  return projects.map((p) => ({
    id: p.id
  }));
}
