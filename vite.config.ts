
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use process.cwd() which is available in Node.js environment during build
  // Added casting to any to handle type checking in environments where @types/node might not be fully linked
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env': env
    }
  };
});
