export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Si entran a la raíz, servir index.html
    if (url.pathname === "/") {
      return env.ASSETS.fetch(new URL("/index.html", request.url));
    }
    // Servir cualquier otro archivo solicitado
    return env.ASSETS.fetch(request);
  },
};