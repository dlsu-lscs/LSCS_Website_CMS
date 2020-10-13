// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'La Salle Computer Society',
  icon: {
    favicon: {
      src: './src/assets/favicon/favicon-32x32.png',
      sizes: [ 16, 32 ],
    },
    touchicon: {
      src: './src/assets/favicon/apple-touch-icon-152x152.png',
      sizes: [76, 152, 120, 167],
      precomposed: true,
    }
  },

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
