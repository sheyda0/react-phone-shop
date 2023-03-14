import React from 'react'

export default function FooterSocial({src, text}) {
  return (
  <div className="d-flex">
    <a href="#">
      <img src={src} className="footer-logo"alt="" />
      <span>{text}</span>
    </a>
  </div>
  )
}
