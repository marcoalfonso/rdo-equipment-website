import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './contact-us.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import Video from '../components/video/video'
import Section from '../components/section/section'
import RichText from '../components/rich-text/rich-text'

class AboutUs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [aboutUsData] = get(this, 'props.data.allContentfulPage.edges')

    const AboutUsPrimaryHero = aboutUsData.node.pageModules[0]
    const AboutUsVideo = aboutUsData.node.pageModules[1]
    const AboutUsRichText = aboutUsData.node.pageModules[2]

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <PrimaryHero
            heading={AboutUsPrimaryHero.heading}
            image={AboutUsPrimaryHero.backgroundImage.fluid}
          />
          <Video
            title={AboutUsVideo.title}
            headline={AboutUsVideo.headline}
            youTubeVideoId={AboutUsVideo.youTubeVideoId}
          />
          <Section>
            <div className="container">
              <RichText body={AboutUsRichText.body.body} />
            </div>
          </Section>
        </div>
      </Layout>
    )
  }
}

export default AboutUs

export const pageQuery = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "2QkS41nfnuE0O4r4J4X3pE" } }) {
      edges {
        node {
          metaTitle
          keywords {
            keywords
          }
          ogDescription
          metaDescription {
            metaDescription
          }
          pageModules {
            __typename
            ... on ContentfulPrimaryHero {
              heading
              backgroundImage {
                fluid {
                  src
                }
              }
            }
            __typename
            ... on ContentfulVideo {
              title
              headline
              youTubeVideoId
            }
            __typename
            ... on ContentfulRichText {
              body {
                body
              }
            }
          }
        }
      }
    }
  }
`
