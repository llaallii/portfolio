import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Serve the existing /assets folder at the site root so the MP4 and PDF
// are reachable at /Wafer_inspection_probe_202604221428.mp4 and /ratan-lal-bunkar-cv.pdf
export default defineConfig({
  plugins: [react()],
  publicDir: 'assets',
  server: { port: 5173 },
});
