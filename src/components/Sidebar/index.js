import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo"></img>
        <img src={LogoSubtitle} alt="logosubtitle"></img>
      </Link>
    </div>
  )
}

export default Sidebar
