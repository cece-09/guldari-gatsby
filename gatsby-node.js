const storeTemplate = require('./src/templates/store-template.js');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const { template } = storeTemplate;
  return graphql(
    `
      query loadPages {
        allContentfulStore {
          edges {
            node {
              name
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create post pages
    result.data.allContentfulStore.edges.forEach((edge) => {
      createPage({
        path: `${edge.node.name}`,
        component: template,
        context: {
          name: `idontknow`
        },
      });
    });
  });
};
