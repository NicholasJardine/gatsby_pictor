import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Image() {
  const data = useStaticQuery(graphql`
    # we used http://localhost:8000/___graphql to create out query
    query {
      # query a particular file
      file(relativePath: { eq: "assets/LOGO4.png" }) {
        # called the image optimiser
        childImageSharp {
          # options of fixed or fluid
          fixed(height: 80, width: 200) {
            # spread operator for all keys and values of the image
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
        loading="lazy"
      />
    </div>
  )
}