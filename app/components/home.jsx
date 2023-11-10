import '../styles/homes.css'
import Link from 'next/link'
const Home = () => {
  return (
    <div className='homeCtn'>
      <Link href='/web'>
        <img src='https://i.ibb.co/6D84wXk/kpwj3j-a07dbb1b5f6c46b56a3d6c13c6e257ff23e49ac3.jpg' alt='web' className='imagen' />
        <h2>WEB</h2>
      </Link>
      <Link href='/ingles'>
        <img src='https://i.ibb.co/sWGkQ6S/4vx6zi-d62db64aca0f275cf5ce17abde722a007099cc4e.jpg' alt='ingles' className='imagen' />
        <h2>INGLÉS</h2>
      </Link>
    </div>
  )
}

export default Home
