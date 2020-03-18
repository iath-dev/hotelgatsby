import { graphql, useStaticQuery } from 'gatsby';

/**
 * @return {[]}
 */
const useRoom = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsRoom {
                nodes {
                    title
                    id
                    content
                    slug
                    image {
                        fluid (maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    return data.allDatoCmsRoom.nodes.map(room => ({
        title: room.title,
        content: room.content,
        id: room.id,
        slug: room.slug,
        image: room.image,
    }));
}
 
export default useRoom;
