import React from 'react'

export default function CartPaymentItem({item, value}) {
  return (
  <li className="d-flex justify-content-between w-100">
    <p>{item}</p>
    <p>{value}</p>
  </li>
  )
}
