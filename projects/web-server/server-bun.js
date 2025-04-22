import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("root dir", { status: 200 });
    } else if (url.pathname === "/list") {
      return new Response("list of all the items in the grocery list", {
        status: 200,
      });
    } else {
      return new Response("404 Not found.", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
