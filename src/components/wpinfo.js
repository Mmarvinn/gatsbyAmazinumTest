import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react"

import * as slugStyles from "../css/wpinfo.module.css"

export const WpInfo = () => {
  const someInfo = useStaticQuery(
    graphql`
      query {
        allWpPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  const firstSlugs = someInfo.allWpPost.edges.map(node => node.node.slug)
  const [slugs, setSlugs] = useState(firstSlugs)

  const deleteSlug = e => {
    console.log(e.target.textContent)

    const deleteSlug = e.target.textContent

    const slugsWithoutDeleted = slugs.filter(slug => deleteSlug != slug)

    console.log(slugsWithoutDeleted)

    setSlugs(slugsWithoutDeleted)
  }

  return (
    <div>
      <h1>Hello from wp INFO !!!</h1>
      <h3>Our posts slugs on website</h3>
      <ol>
        {slugs.map(slug => (
          <li
            className={slugStyles.slug}
            key={slug}
            onClick={e => deleteSlug(e)}
          >
            {slug}
          </li>
        ))}
      </ol>
    </div>
  )
}
