import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './contact-us.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import ProductCarousel from '../components/product-carousel/product-carousel'
import Section from '../components/section/section'

class ContactUs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <TextInterlude
            headline="Contact Us."
          />
        </div>
      </Layout>
    )
  }
}

export default ContactUs

export const pageQuery = graphql`
  query ContactUsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`