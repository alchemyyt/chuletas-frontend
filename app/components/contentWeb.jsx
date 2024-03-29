import { getPosts } from '../services/posts'
import Link from 'next/link'
import '../styles/content.css'
const Content = async () => {
  const datos = await getPosts()
  const posts = datos.docs
  const web = posts.filter(post => post.category === 'web')
  return (
    <div className='content'>
      {web.map((valor, indice) =>
        <Link key={indice} href={valor.id}>
          <img src={valor?.image?.url || 'https://cms-y0rj.onrender.com/media/node.png'} alt={valor?.image?.alt || 'alt por defecto'} />
          <div>
            <h5>{valor.title}</h5>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Content
