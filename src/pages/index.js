import React from "react"
import { Layout, HotelImg, ContentHome, PreviewRoom } from "../components"
import { useRoom } from "../hooks"
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {
  
  const rooms = useRoom();

  return (
    <Layout>
      <HotelImg />
      <ContentHome />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras Habitaciones
      </h2>

      <RoomsList>
        {rooms.map(room => (
          <PreviewRoom key={room.id} data={room} />
        ))}
      </RoomsList>

    </Layout>
  )
}

export default IndexPage
