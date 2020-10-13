// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'La Salle Computer Society',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: [ 'nofollow', 'noopener', 'noreferrer' ],
      anchorClassName: 'icon icon-link'
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Blog',
        remark: {}
      }
    }
  ]
}
