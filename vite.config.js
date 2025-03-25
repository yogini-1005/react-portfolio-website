import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio-website/', // Ensure this matches your repo name!
  server: {
    historyApiFallback: true,
  },
});
