import React from 'react'

export default function FooterCol({item1, item2, item3, item4}) {
  return (
  <div className="col">
    <ul>
      <li>
        <a href="#">{item1}</a>
      </li>
      <li>
        <a href="#">{item2}</a>
      </li>
      <li>
        <a href="#">{item3}</a>
      </li>
      <li>
        <a href="">{item4}</a>
      </li>
    </ul>
  </div>
  )
}
