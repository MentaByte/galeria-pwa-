const CACHE_NAME = 'galeria-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://i.imgur.com/NTpM7zB.jpg',
  'https://i.imgur.com/8NB2kyD.jpg',
  // Añade aquí todas las URLs de imágenes que quieres cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});