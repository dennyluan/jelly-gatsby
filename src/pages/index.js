import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../styles/app.scss'

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div id="home">
        <div className="container center">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div id="pokemans">
                <div id="pikachu"></div>
                <div id="ash"></div>
              </div>
              <h1>Hello!</h1>
              <p>I'm Denny Luan, welcome to my web page.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <Link to="/blog/">Blog</Link>
                </li>
                
                <li>
                  <a href="https://twitter.com/dennyluan">Twitter</a>
                </li>

                <li>
                  <a href="https://experiment.com">Experiment</a>
                </li>

                <li>
                  <a href="https://research.pizza">Research Pizza</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage;
