import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  vercel: {
    config: {
      routes: [
        {
          src: "/assets/(.*)",
          headers: { "cache-control": "public, max-age=31536000, immutable" }
        },
        {
          src: "/",
          dest: "/__server"
        },
        {
          handle: "filesystem"
        },
        {
          src: "/(.*)",
          dest: "/__server"
        }
      ]
    }
  }
});
