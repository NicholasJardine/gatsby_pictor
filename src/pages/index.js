import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FooterContainer from '../containers/footer'
import {Button} from 'react-bootstrap'
import styled from 'styled-components';


const SignUpButton = styled.div`
color: black;
padding: 8px 24px;
border-radius: 24px;
background: #CCA459;;
text-align: center;
font-weight:bold;
width: 150px;
  a{
    color:black;
    text-decoration:none;
    &:hover{
      color:white;
      transition: 200ms ease-in;
    }
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <FooterContainer></FooterContainer> */}
    <h1>Hi people</h1>
    <SignUpButton><Link to="#">Get Started</Link></SignUpButton>
    <p>Welcome to your new Gatsby site.</p>

    <Button href="./about/"> About</Button>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/" className="btn btn-outline-primary">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  
  </Layout>
)

export default IndexPage
