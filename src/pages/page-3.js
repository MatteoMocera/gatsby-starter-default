import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Questa è la terza pagina.</h1>
    <p>Benvenuto nella terza pagina</p>
    <Link to="/">Vai alla homepage</Link>
    <Link to="/page-2/">Vai alla seconda pagina</Link>
  </Layout>
)

export default SecondPage
