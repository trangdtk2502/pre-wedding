import React, { Children } from "react"

const Banner = ({ children, bgClass, ...props }) => (
  <section className={`hero is-fullheight ${bgClass}`}
    {...props}
  >
    {children}
  </section>
)

export default Banner
