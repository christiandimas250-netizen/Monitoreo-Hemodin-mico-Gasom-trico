const CACHE_NAME = 'monitor-hemo-v1';

// Aquí le decimos qué cosas guardar en el teléfono
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icono-192.png',
        './icono-512.png'
        // Si tienes archivos de CSS o JavaScript externos, anótalos aquí, por ejemplo:
        // './style.css',
        // './script.js'
      ]);
    })
  );
});

// Esto hace que la app busque primero en la memoria sin internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
