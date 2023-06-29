import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react"

import { OnePost } from "../templates/onePost"
import * as slugStyles from "../css/wpinfo.module.css"

export const WpInfo = () => {
  const someInfo = useStaticQuery(
    graphql`
      query {
        allWpPost {
          edges {
            node {
              slug
              content
            }
          }
        }
      }
    `
  )

  // const someInfo = useStaticQuery(
  //   graphql`
  //     query {
  //       allWpPost(skip: 2, limit: 1) {
  //         edges {
  //           node {
  //             slug
  //             content
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  const postData = someInfo.allWpPost.edges
  // console.log(postData)
  const slugs = someInfo.allWpPost.edges.map(node => node.node.slug)
  const [post, setPost] = useState({
    node: {
      slug: "computer-vision-in-real-life-what-we-receive",
      content: "Some content of post also will be here",
    },
  })

  const showPost = e => {
    setPost(postData.find(post => post.node.slug == e.target.textContent))
    console.log(post)
  }

  return (
    <div>
      <h1>Hello from wp INFO !!!</h1>
      <h3>Our posts slugs on website</h3>
      <ol>
        {slugs.map(slug => (
          <li className={slugStyles.slug} key={slug} onClick={e => showPost(e)}>
            {slug}
          </li>
        ))}
      </ol>
      <div>
        <h1>One post</h1>
        <h3>{post.node.slug}</h3>
        {/* <div dangerouslySetInnerHTML={{ __html: post.node.content }} /> */}
        {/* <div dangerouslySetInnerHTML={{ __html: postData[5].node.content }} /> */}
        {/* <OnePost slug={post.node.slug} /> */}
      </div>
    </div>
  )
}
