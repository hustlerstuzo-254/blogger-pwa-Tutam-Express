import { defineConfig } from '@/types/config';

export default defineConfig({
  manifest: {
    id: '/',
    name: 'Tutam Express',
    short_name: 'Tutam',
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
        name: 'Chanuka',
        short_name: 'Chanuka',
        description: 'Chanuka - General Knowledge',
        url: '/search/label/Chanuka?utm_source=homescreen',
      },
      {
        name: 'Technology',
        short_name: 'Tech',
        description: 'Technology news and updates',
        url: '/search/label/Technology?utm_source=homescreen',
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
