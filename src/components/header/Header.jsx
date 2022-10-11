import React from 'react'
import logo1 from "../../assets/images/logo1.png"
import "./Header.css"
import "../../index.css"
import { Link } from 'react-router-dom'
import { nav } from '../../assets/data/Data'
import { User } from './User'

const Header = () => {
  return  <><header>
      <div className='scontainer flex'>
          <div className='logo'>
              <img src={logo1} alt='logo' width='100px'/>
          </div>
          <nav>
              <ul>
                  {nav.map((link) => (
                      <li key={link.id}>
                          <Link to={link.url}>{link.text}</Link>
                      </li>
                  ))}
             </ul>
          </nav>
          <div className="account flexCenter">
              <User />
          </div>
      </div>
      </header>
    </>
    
}

export default Header
