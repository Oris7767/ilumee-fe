import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ILUMEE — Awaken Your True Power',
    short_name: 'ILUMEE',
    description: 'Soul Plan, Human Design, Numerology — decode your true design.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8eed8',
    theme_color: '#b21267',
    icons: [
      { src: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
  };
}
