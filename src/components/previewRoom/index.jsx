import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 80, .85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const CardContent = styled.div`
    padding: 3rem;

    p {
        max-height: 200px;
        overflow-y: hidden;
    }
`;

const PreviewRoom = ({ data }) => {

    const { content, image, title, slug } = data;

    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Image fluid={image.fluid} />
            <CardContent css={css`
                padding: 3rem;
            `}>
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{title}</h3>
                <p>{content}</p>
                <Button to={`room/${slug}`}>ver habitación</Button>
            </CardContent>
        </div>
    );
}
 
export default PreviewRoom;
