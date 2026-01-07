    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'
    import react from '@vitejs/plugin-react' // If you are using React

    export default defineConfig({
      plugins: [
        react(), // Add react plugin if using React
        tailwindcss(),
      ],
      base: '/farah-portafolio/',
    })