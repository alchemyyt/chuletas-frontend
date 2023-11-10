import Menu from './menu'
import Search from './search'
import SocialMedia from './socialMedia'
import '../styles/menuMobile.css'
const MenuMobile = () => {
  return (
    <div className='menuMobile'>
      <Search />
      <Menu />
      <SocialMedia />
    </div>
  )
}

export default MenuMobile
