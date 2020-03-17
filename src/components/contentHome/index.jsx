import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TextHome = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;

        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;

const ContentHome = () => {
  
    const query = useStaticQuery(graphql`
      query {
        allDatoCmsPage(filter: { slug: { eq: "home" } }) {
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
            <TextHome>
                <p>{content}</p>
                <Image loading="lazy" fluid={image.fluid} />
            </TextHome>
        </React.Fragment>
    );
}
 
export default ContentHome;
