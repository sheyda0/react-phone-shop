import { Link } from 'react-router-dom'

export default function HeaderMenu() {
  return (
        <ul className="header-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/">About Us</Link>
            </li>
            <li>
                <Link to="/">Contact Us</Link>
            </li>
            <li>
                <Link to="/">Sign Up / Sign In</Link>
            </li>
        </ul>
  )
}
