import { defineConfig } from '@/types/config';

export default defineConfig({
  manifest: {
    id: '/',
    name: 'Tutam Express',
    short_name: 'TutamExpress',
    description: 'Latest news in politics, business, technology, sports and entertainment in Kenya, Africa and the world.',
    dir: 'ltr',
    lang: 'en-KE',
    background_color: '#fff',
    theme_color: '#064e3b',
    display: 'standalone',
    orientation: 'natural',
    scope: '/',
    start_url: '/?utm_source=homescreen',
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'Tutam Express News',
        short_name: 'TutamExpress',
        description: 'Tutam Express Political News and Updates',
        url: '/search/label/TutamExpress?utm_source=homescreen',
      },

      {
        name: 'Trending News',
        short_name: 'TrendingNews',
        description: 'Trending News and Updates in Political, Business, Technology, Sports and Entertainment',
        url: '/search/label/Trending?utm_source=homescreen',
      },

      {
        name: 'Entertainment News',
        short_name: 'Entertainment',
        description: 'Entertainment news and updates',
        url: '/search/label/Entertainment?utm_source=homescreen',
      },

      {
        name: 'Sports News',
        short_name: 'SportsNews',
        description: 'Sports news and updates',
        url: '/search/label/Sports?utm_source=homescreen',
      },
    ],
  },

  pwa: {
    logs: true,
  },

  // OneSignal is only available if you are using cloudflare workers
  oneSignal: {
    enabled: false, // To enable OneSignal, set this to true
    appId: '********-****-****-****-************', // Replace with your OneSignal App Id
    allowLocalhostAsSecureOrigin: true,
  },

  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://tutamexpress.blogspot.com',
});
