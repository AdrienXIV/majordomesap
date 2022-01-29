module.exports = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
  images: {
    domains: ["https://www.majordomeformationsap.com/"],
  },
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // },
  future: {
    webpack5: true,
  },
  // // webpack: function (config, options) {
  // //   config.experiments = {};
  // //   return config;
  // // },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Note: we provide webpack above so you should not `require` it
  //   // Perform customizations to webpack config
  //   config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

  //   // Important: return the modified config
  //   return config;
  // },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/formations": { page: "/formations" },
      "/formation-majordomat": { page: "/formation-majordomat" },
      "/formation-advf": { page: "/formation-advf" },
      "/financement": { page: "/financement" },
      "/prochaines-sessions": { page: "/prochaines-sessions" },
      "/qui-sommes-nous": { page: "/qui-sommes-nous" },
      "/sitemap.xml": { page: "/sitemap.xml" },
      "/robots.txt": { page: "/robots.txt" },
    };
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/public",
  },
  api: {
    externalResolver: true,
    optionalCatchAll: true,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';",
          },
          {
            key: "X-Frame-Options",
            value: "deny",
          },
          {
            key: "content-language",
            value: "fr-FR",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};
