import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => { return (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>This is the best title I could find</title>
  </Helmet>

  <Layout>
    <div class="container-image">
    <img
        className="headshot"
        src={data.file.childImageSharp.fixed.src}
        alt="Paulo Teixeira"
      />
    </div>
    <div class="container-text">
    <h1>Hey there, I'm <strong>Paulo Teixeira</strong></h1>
    <p>I'm enabling the way the world interacts with <a href="https://unbabel.com">Unbabel</a> by working with designers and developers on all of its public-facing web properties.</p>
    {/* <p>+2 +3 +2 </p> */}
    <p>Previously </p>
    <p>Overall I spent  </p>
    <p>Let's connect via <a href="mailto:ftpaul+web@gmail.com">email</a> or <a href="https://www.linkedin.com/in/ftpaul/">LinkdeIn</a>.</p>
    </div>
  </Layout>
  </>)
}

export const query = graphql`
{
  file(relativePath: {eq: "paulo-teixeira-square.jpg"}) {
    childImageSharp {
      fixed {
        src
      }
    }
  }
}
`

export default IndexPage