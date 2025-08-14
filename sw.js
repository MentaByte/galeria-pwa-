const CACHE_NAME = 'galeria-v7';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png',
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

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
