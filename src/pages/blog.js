import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Navigation } from "../components/navigation"
import { WpInfo } from "../components/wpinfo"

const BlogPage = ({ data, location }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout location={location} title={title}>
      <Navigation />
      <WpInfo />
      <Seo title={title} />
      <h1>Blog page test</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
