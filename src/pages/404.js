import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql , Link} from 'gatsby'

const IndexPage = ({ data }) => { return (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>This is the best title I could find</title>
  </Helmet>

  <Layout>
    <h1 className="text-2xl text-bold text-gray-600">You just hit a road block <span role="img" aria-label="Construction">🚧</span></h1>
    <h2 className="text-2xl text-bold text-gray-600">That sucks. Please go back <Link className="text-yellow-600 underline hover:text-yellow-400" to="/" >home</Link>.</h2>
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