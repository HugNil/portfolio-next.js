import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence multiple lockfile warning by pinning tracing root to repo root
  outputFileTracingRoot: path.join(__dirname, '..'),
};

export default nextConfig;
