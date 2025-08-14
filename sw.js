const CACHE_NAME = 'galeria-v5';
const ASSETS = [
  '/galeria-pwa-/', // ¡CAMBIAR POR TU NOMBRE DE REPOSITORIO REAL!
  '/galeria-pwa-/index.html',
  '/galeria-pwa-/manifest.json',
  '/galeria-pwa-/icon-192x192.png',
  '/galeria-pwa-/icon-512x512.png',
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
  const requestUrl = new URL(event.request.url);
  
  // Solo cachear solicitudes de nuestro dominio
  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname.startsWith('/nombre-repositorio/')) { // ¡CAMBIAR!
      event.respondWith(
        caches.match(event.request)
          .then(response => response || fetch(event.request))
      );
      return;
    }
  }
  
  // Para otras solicitudes (como las imágenes de Imgur)
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
