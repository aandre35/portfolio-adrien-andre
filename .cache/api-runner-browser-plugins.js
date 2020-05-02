module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750,"linkImagesToOriginal":false,"wrapperStyle":"margin-bottom: 1.0725rem;"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatstrap","short_name":"Gatstrap","description":"Gatsby starter for bootstrap a blog","homepage_url":"https://gatstrap.netlify.com","start_url":"/","background_color":"#fff","theme_color":"#673ab7","display":"standalone","icons":[{"src":"/img/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/img/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":""},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
