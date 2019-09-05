import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Ciao!</h1>
    <p>Questa è la prova di Gatsby per WDLab.</p>
    <p>Da adesso in poi, sviluppiamo cose serie.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Vai alla seconda pagina</Link>
  </Layout>
)

export default IndexPage
