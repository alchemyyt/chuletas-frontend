import Link from 'next/link'
import '../styles/menu.css'
const Menu = () => {
  return (
    <div className='menu'>
      <section>
        <h3>
          <Link href='/web'> Web 💻</Link>
        </h3>
        <span class='webMenuSpan'>
          <ol />
        </span>
      </section>
      <section>
        <h3>
          <Link href='/ingles'> ingles 💻</Link>
        </h3>
        <span class='inglesMenuSpan'>
          <ol />
        </span>
      </section>
    </div>
  )
}

export default Menu
