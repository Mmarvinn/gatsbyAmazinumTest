import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Navigation } from "../components/navigation"

const PortfolioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Navigation />
      <Seo title={siteTitle} />
      <h1>Portfolio page test</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
