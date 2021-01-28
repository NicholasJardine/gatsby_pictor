import React from "react"
import PropTypes from "prop-types"
import Navbar from "./ui/navbar"
import Footer from './ui/footer'
import styled from "styled-components"

const Body = styled.html`
  margin: 0;
`


const Layout = ({ children }) => {
  return (
    <Body>
      <Navbar></Navbar>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </Body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
