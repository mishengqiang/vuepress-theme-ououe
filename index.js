module.exports = {
  layoutDir: 'layouts',
  globalLayout: '/layouts/GlobalLayout',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    '@vuepress/last-updated',
    'blog-multidir',
    'img-lazy',
    ['reading-progress', { readingDir: /[^/]+$/ }]
  ]
}
