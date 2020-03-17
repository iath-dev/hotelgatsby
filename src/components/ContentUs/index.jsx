import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ContentUS = () => {

    const query = useStaticQuery(graphql`
      query {
        allDatoCmsPage(filter: { slug: { eq: "us" } }) {
          nodes {
            title
            content
            image {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);
    
    const [ info ] = query.allDatoCmsPage.nodes;
    
    const { title, content, image } = info;

    return ( 
        <React.Fragment>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >
                {title}
            </h2>
            <div>
                <p>{content}</p>
                <Image loading="lazy" fluid={image.fluid} />
            </div>
        </React.Fragment>
    );
}
 
export default ContentUS;
