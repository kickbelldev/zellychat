/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-postcss'
    // "@snowpack/plugin-dotenv",
    // "@snowpack/plugin-webpack",
  ],
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' }
  ],
  optimize: {
    bundle: true,
    minify: true
  },
  packageOptions: {
    source: 'remote'
  },
  devOptions: {
  },
  buildOptions: {
    sourcemap: true
  }
}
