module.exports = {
  globDirectory: "site/",
  globPatterns: ["**/*.{html,css,ttf,woff,woff2,png,svg,js,ico,json,xml,gz}"],
  swDest: "site/sw.js",
  maximumFileSizeToCacheInBytes: 7000000,
  swSrc: "sw-src.js",
};
