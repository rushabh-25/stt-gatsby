import React from "react"
import Menu from "./menu-cloud"
import Menu2 from "./menu2"

const Layout3 = ({ children }) => {
  return (
    <div className="app">
      <Menu2 />
      <div className="wrapper">
        <Menu />
        <div className="cd-hero">{children}</div>
        <footer className="footer">
          <div>© 2020 by Stork. All rights reserved.</div>
        </footer>
      </div>
    </div>
  )
}

export default Layout3
