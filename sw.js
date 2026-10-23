const CACHE_NAME = "eat-tool-v1";
const urls = ["./", "./index.html", "./manifest.json"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urls)))
})
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(names=>Promise.all(names.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))))
})
self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))
})
