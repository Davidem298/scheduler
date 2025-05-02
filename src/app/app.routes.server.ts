import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'working-hard',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**', // Catch-all for 404 pages
    renderMode: RenderMode.Prerender
  }
];
