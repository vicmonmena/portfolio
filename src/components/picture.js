import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Picture(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mi_foto.jpg" }) {
        childImageSharp {
          fixed(width: 150  , height: 150 ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const {url, altText, title} = props;
  const styles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  }

  if (url) {
    return (
      <img
        style={styles}
        src={url}
        alt={altText}
        title={title} />
    );
  }

  return (
    <Img
      style={styles}
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt={altText}
      title={title} />
  )
}

export default Picture