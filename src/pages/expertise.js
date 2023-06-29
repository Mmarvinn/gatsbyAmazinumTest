import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Navigation } from "../components/navigation"

const ExpertisePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  // const posts = useStaticQuery(graphql`
  //   query {
  //     allWpPost {
  //       edges {
  //         node {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  const slugs = data.allWpPost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Navigation />
      {slugs.map(slug => (
        <div>
          <Link to={`/expertise/${slug.node.slug}`}>
            <h3>{slug.node.slug}</h3>
          </Link>
        </div>
      ))}
      <Seo title={siteTitle} />
      <h1>Expertise page test</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default ExpertisePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost {
      edges {
        node {
          slug
        }
      }
    }
  }
`
