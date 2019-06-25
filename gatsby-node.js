/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement Gatsby's API “onCreatePage” - override its default function. This is called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages only on the client.

    if (page.path.match(/^\/account/)) {
      page.matchPath = "/account/*"
  
      // Update the page.
      createPage(page)
    }
  }
