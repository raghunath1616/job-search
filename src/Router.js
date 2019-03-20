import React from "react"
import { Route } from "react-router-dom"
import Layout from "dumbComponents/common/Layout"
import Navbar from "dumbComponents/common/Navbar"
import JobSearch from "dumbComponents/JobSearch"

const Router = () => (
  <Layout>
    <Navbar />
    <Route path="/" component={JobSearch} />
  </Layout>
)

export default Router
