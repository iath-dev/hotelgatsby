import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Content = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;

const ContentUS = () => {

    const query = useStaticQuery(graphql`
      query {
        allDatoCmsPage(filter: { slug: { eq: "us" } }) {
          nodes {
            title
            content
            image {
              fluid(maxWidth: 1200) {
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
            <Content>
                <p>{content}</p>
                <Image loading="lazy" fluid={image.fluid} />
            </Content>
        </React.Fragment>
    );
}
 
export default ContentUS;
