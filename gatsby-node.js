/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const results = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }`
    )

    // console.log(results.data.allDatoCmsRoom.nodes);

    if (results.errors) {
        reporter.panic('No hubo resultados', results.errors);
    }

    const rooms = results.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: `room/${room.slug}`,
            component: require.resolve('./src/components/room/index.jsx'),
            context: {
                slug: room.slug,
            }
        })
    });

}
