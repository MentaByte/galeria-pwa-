
const CACHE_NAME = 'galeria-v6';
const ASSETS = [
  'https://mentabyte.github.io/galeria-pwa-/',
  'https://mentabyte.github.io/galeria-pwa-/index.html',
  'https://mentabyte.github.io/galeria-pwa-/manifest.json',
  'https://mentabyte.github.io/galeria-pwa-/icon-192x192.png',
  'https://mentabyte.github.io/galeria-pwa-/icon-512x512.png',
  'https://i.imgur.com/NTpM7zB.jpg',
  'https://i.imgur.com/NTpM7zB.jpg',
  'https://i.imgur.com/8NB2kyD.jpg',
  'https://i.imgur.com/cLVENtZ.jpg',
  'https://i.imgur.com/N5Dw0uI.jpg',
  'https://i.imgur.com/jibpP7q.jpg',
  'https://i.imgur.com/ZS1JtFE.jpg',
  'https://i.imgur.com/bDjSxj7.jpg',
  'https://i.imgur.com/xbHO4ET.jpg',
  'https://i.imgur.com/752qncM.jpg',
  'https://i.imgur.com/CDkvzSZ.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

const CACHE_NAME = 'galeria-v5';
const ASSETS = [
  '/MentaByte/galeria-pwa-/', // ¡CAMBIAR POR TU NOMBRE DE REPOSITORIO REAL!
  '/MentaByte/galeria-pwa-/index.html',
  '/MentaByte/galeria-pwa-/manifest.json',
  '/MentaByte/galeria-pwa-/icon-192x192.png',
  '/MentaByte/galeria-pwa-/icon-512x512.png',
  'https://i.imgur.com/NTpM7zB.jpg',
  'https://i.imgur.com/8NB2kyD.jpg',
  'https://i.imgur.com/cLVENtZ.jpg',
  'https://i.imgur.com/N5Dw0uI.jpg',
  'https://i.imgur.com/jibpP7q.jpg',
  'https://i.imgur.com/ZS1JtFE.jpg',
  'https://i.imgur.com/bDjSxj7.jpg',
  'https://i.imgur.com/xbHO4ET.jpg',
  'https://i.imgur.com/752qncM.jpg',
  'https://i.imgur.com/CDkvzSZ.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});


