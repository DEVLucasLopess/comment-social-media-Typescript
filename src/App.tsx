import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from '../src/components/Post'

import './global.css'

import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DEVLucasLopess.png',
      name: 'Lucas Lopes',
      role: 'Front-end developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋' },
        {type: 'paragraph', content: '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
        {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/johneverton01.png',
      name: 'John',
      role: 'Web developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋' },
        {type: 'paragraph', content: '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
        {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-09 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar /> 
        </aside>
        <main>
          { posts.map((post) => {
            return (
              <div key={post.id}>
                <Post 
                  post={post}
                />
              </div>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
