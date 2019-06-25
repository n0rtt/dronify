import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

import { login, isAuthenticated, getProfile } from "../utils/auth"


const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout>
      <Global styles={GlobalStyles} />
      <SEO title="user account" />
      <nav>
        <Link to="/account/">Home</Link>{" "}
        <Link to="/account/settings/">Settings</Link>{" "}
        <Link to="/account/billing/">Billing</Link>{" "}
      </nav>
      <Router>
        <Home path="/account/" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </Layout>
  )
}

export default Account
