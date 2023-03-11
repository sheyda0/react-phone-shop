import React from 'react'
import HeaderMenu from './HeaderMenu'
import CardIcon from './CardIcon'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header>
      <div className="container header">
        <HeaderMenu />
        <Link to="/cart">
        <CardIcon />
        </Link>
      </div>
    </header>
  )
}