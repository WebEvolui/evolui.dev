import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // SEO: URLs legadas de cursos (ainda existem no servidor e no indice do Google) -> versao atual.
  // O Astro gera uma pagina de redirecionamento imediato (meta refresh + canonical + noindex) em cada URL antiga.
  redirects: {
    '/curso/curso-flutter-completoatualizado-2025-androidioswindows': '/curso/curso-flutter-completoatualizado-2026-androidioswindows/',
    '/curso/curso-flutter-completoatualizado-2024-androidioswindows': '/curso/curso-flutter-completoatualizado-2026-androidioswindows/',
    '/curso/laravel-11-e-flutter-3-aplicacoes-com-comunicacao-real-time-2024-impressor': '/curso/laravel-12-e-flutter-3-aplicacoes-com-comunicacao-real-time-2025-impressor/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
