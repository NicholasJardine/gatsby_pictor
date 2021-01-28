import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const LogoImage = ({ data }) => (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  )
  
  export const query = graphql`
    query {
      file(relativePath: { eq: "/gatsby_pictor/assets/LOGO4.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `

  export default LogoImage