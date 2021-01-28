import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
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
const BannerOne = styled.div`
display:flex;
background: black;
text-align: center;
font-weight:bold;
width: 100%;
height: auto;
  a{
    color:black;
    text-decoration:none;
    &:hover{
      color:white;
      transition: 200ms ease-in;
    }
  }
`
const HeadingContainer = styled.div`
    width:80%;
    display:flex;
    position: relative;
    margin: 0 auto;
    align-items:center;

    h1{    
        font-weight:700;
        color:blue;
        margin-top:40px;   
    }

    h4{
        color: blue;
        font-weight: bold;
        text-align: center;
    }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerOne>

    <HeadingContainer> <h1>Pictor -Simplifying Casting on Both ends
        </h1>
        </HeadingContainer>

    </BannerOne>
    <SignUpButton><Link to="#">Get Started</Link></SignUpButton>


    <p>Welcome to your new Gatsby site.</p>

    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/" className="btn btn-outline-primary">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  {/* <LogoImage></LogoImage> */}
  </Layout>
)

export default IndexPage
