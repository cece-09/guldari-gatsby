const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query AllContentfulStore {  
      allContentfulStore {
        edges {
          node {
            contentful_id
            name
            number
            category
            phone
            photo {
              url
            }
            slug
          }
        }
      }
    }  
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error`)
    return
  }

  const storeTemplate = path.resolve(`src/templates/store-template.js`)
  console.log(result)
  result.data.allContentfulStore.edges.forEach(({ node }) => {
    createPage({
      path: `/store/${node.slug}`,
      component: storeTemplate,
      context: {
        pagePath : path,
        store: node,
      },
    })
  })
}
