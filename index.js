addEventListener('fetch', (event) => {
  const req = event.request
  const url = new URL(req.url)
  url.hostname = 'registry.npmjs.com'
  event.respondWith(fetch(url.toString(), req))
})
