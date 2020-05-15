import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Home from '../components/home'
import About from '../components/about'
import Contact from '../components/contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

const index = () => {
  return (
    <>
      <Layout>
        <Seo title="Hi! It's Somoy" />
        <Home />
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default index
