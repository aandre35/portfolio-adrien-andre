const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/adrien/Sites/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/adrien/Sites/portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/adrien/Sites/portfolio/src/pages/projects.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/Users/adrien/Sites/portfolio/src/templates/index.js")))
}

