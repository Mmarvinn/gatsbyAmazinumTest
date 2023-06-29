import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const OnePost = ({ pageContext: { slug }, data: { allWpPost } }) => {
  const content = allWpPost.edges[0].node.content

  return (
    <Layout>
      <div>
        <h1>Some header</h1>
        <h4>{slug}</h4>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          content
        }
      }
    }
  }
`
export default OnePost
