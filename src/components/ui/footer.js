import React from 'react';
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 12px;
  background: gold;
  @media(min-width: 450px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
const Column = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 8px 0;
  }
`

const Footer = () => {
  return (
    <Container>
      <Column>
        <h4>First Title</h4>
        <a>Footer Title</a>
        <a>Footer Title</a>
        <a>Footer Title</a>
      </Column>
      <Column>
        <h4>Second Title</h4>
        <a>Footer Title</a>
        <a>Footer Title</a>
        <a>Footer Title</a>
      </Column>
      <Column>
        <h4>Third Title</h4>
        <a>Footer Title</a>
        <a>Footer Title</a>
        <a>Footer Title</a>
      </Column>
      <Column>
        <h4>Fourth Title</h4>
        <a>Footer Title</a>
        <a>Footer Title</a>
        <a>Footer Title</a>
      </Column>
    </Container>
  )
}

export default Footer;