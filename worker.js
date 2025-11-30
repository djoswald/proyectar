export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Si es la página principal, carga index.html
    if (url.pathname === "/") {
      return env.ASSETS.fetch(new URL("/index.html", request.url));
    }
    // Para el resto de archivos (imágenes, css, etc.)
    return env.ASSETS.fetch(request);
  },
};