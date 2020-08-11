import React from 'react'
import './header.css'
import { Link, useHistory } from 'react-router-dom'
import { removeToken } from '../../Services/auth'

export default function Header(props) {
  const history = useHistory()

  const handleLogout = () => {
    props.setCurrentUser(null)
    localStorage.removeItem("authToken")
    removeToken();
    history.push('/')
  }

  return (
    <div className="head-ctn">
      <nav className="head-nav">
        <Link to="/"><img className="logo" src="https://i.imgur.com/A95BHHd.png" /></Link>
        <h1 className="title">Bluetail</h1>
        <ul className="head-ul">
          <li className="head-li">About</li>
          {
            props.currentUser ? (
              <>
                <li>{props.currentUser.username}</li>
                <button onClick={handleLogout}>Logout</button>

              </>
            ) : (
                <>
                  <Link to='/login'>Login/Register</Link>

                </>
              )}
        </ul>
      </nav>
    </div>
  )
}
