import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Navigation } from '..';

const HomeLink = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: #222;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <HomeLink to="/">
                    <h1>
                        Hotel Gatsby
                    </h1>
                </HomeLink>
                <Navigation />
            </div>
        </header>
    );
}
 
export default Header;
