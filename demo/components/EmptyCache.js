export default function emptyCache() {
  if ('caches' in window) {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    // Force reload the page
    window.location.reload(true);
  }
}