// Minimal service worker — required by Chrome to consider this app "installable".
// It doesn't need to do real offline caching for this to work; just needs to
// successfully install and respond to fetch events.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through: just fetch normally from the network.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
