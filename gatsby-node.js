const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allContentfulStore {
        edges {
          node {
            id
            contentful_id
            name
            phone
            number
            description {
              raw
            }
            category {
              contentful_id
              key
              code
              name
            }
            image {
              url
              title
            }
          }
        }
      }
      allContentfulCategory(sort: { fields: key }) {
        edges {
          node {
            contentful_id
            key
            code
            name
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error`);
    return;
  }

  const storeTemplate = path.resolve(`src/templates/store-template.js`);
  console.log(result);
  result.data.allContentfulStore.edges.forEach(({ node }) => {
    createPage({
      path: `/store/${node.contentful_id}`,
      component: storeTemplate,
      context: {
        store: node,
      },
    });
  });
};
