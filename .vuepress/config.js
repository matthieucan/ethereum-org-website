module.exports = {
  title: 'ethereum.org',
  description: 'Ethereum resources',
  theme: 'ethereum-dot-org',
  themeConfig: {
    nav: [
      { text: 'Ethereum.org', link: '/' },
      { text: 'Beginners', link: '/beginners/' },
      { text: 'Use', link: '/use/' },
      { text: 'Learn', link: '/learn/' },
      { text: 'Build', link: '/build/' }
    ]
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-attrs'))
    }
  }
}