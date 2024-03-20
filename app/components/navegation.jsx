'use client'//  para poder usar useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from './menu'
import MenuMobile from './menuMobile'
import Search from './search'
import SocialMedia from './socialMedia'
import { useState } from 'react'//  importo useState
import '../styles/navegation.css'

const menuIcon = <FontAwesomeIcon icon={faBars} />
const Navegation = () => {
  const [clicked, setClicked] = useState(false) // defino el use state en falso
  const [iconClick, setIconClick] = useState(false)
  const handleClick = () => { // defino la funcion cuando le de click cambie el use state
    setClicked(!clicked)
  }
  const handleIconClick = () => {
    setIconClick(!iconClick)
  }
  return (
    <header>
      <nav className='navBar'>
        <a href='/'><h1>Chuletas de ati 🥩</h1></a>
        {iconClick ? <MenuMobile /> : null}
        <span className='navbarSpan'>
          <div className='navRight'>
            <i className='fa-solid fa-xmark' id='closeMenuMobile' />
            <div className='menuCtn'>
              <span id='menuSpan' onClick={handleClick/* ejecuto la funcion cuando le de click a este elemento */}>
                menu
              </span>
            </div>
            {clicked ? <Menu /> : null/* cuando el useState clicked sea true renderiza el componente menu y cuando no en nulo para que no renderice nada */}
            <Search />
            <SocialMedia />
          </div>
        </span>
        <div className='menuIcon' onClick={handleIconClick}>
          {menuIcon}
        </div>
      </nav>
    </header>
  )
}

export default Navegation
//  INVESTIGAR DE USESTATE y tratar de hacer todo el js aqui a ver si es un problema de importe
