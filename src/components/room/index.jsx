import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

export const query = graphql`
query ($slug: String!) {
    allDatoCmsRoom (filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        image {
          fluid (maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
  
`

const RoomTemplate = ({ data }) => {

    const [ info ] = data.allDatoCmsRoom.nodes;
    
    const { title, content, image } = info;

    return (
        <Layout>
            <main css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}>
                <h1 css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
                >
                    {title}
                </h1>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </main>
        </Layout>
    );
}
 
export default RoomTemplate;
