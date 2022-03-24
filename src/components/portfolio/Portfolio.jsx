import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Jogos em JS',
    github: 'https://github.com/ThiagoMendes92/Jogos-JS',
    demo: 'https://planetdefensejs-tm.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Form de Login',
    github: 'https://github.com/ThiagoMendes92/Form-de-Login',
    demo: 'https://loginscreen-tm.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Discord - Imersão React',
    github: 'https://github.com/ThiagoMendes92/ImersaoReact-Alura',
    demo: 'https://imersaoreact-discordalura-thiagomendes.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'DS Movie - Semana Spring React',
    github: 'https://github.com/ThiagoMendes92/spring-react-DevSuperior',
    demo: 'https://thiagomendesdsmovie.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Projeto google Glass - Curso HTML e CSS',
    github: 'https://github.com/ThiagoMendes92/projeto-glass-html5',
    demo: 'https://projeto-glass-html5-thiagomendes92.netlify.app/index.html'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Imersão Dev Alura',
    github: 'https://github.com/ThiagoMendes92/ImersaoDev-Alura',
    demo: 'https://github.com/ThiagoMendes92/ImersaoDev-Alura'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio