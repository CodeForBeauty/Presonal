import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { projects } from '../projects'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const PortfolioProject = (props: {
  name: string
  desc: string
  media: string[]
  id: number
}) => {
  const style: CSSProperties = {
    width: '24rem',
    height: 'fit-content',
    margin: 'auto',
    marginTop: '2rem',
    padding: '1rem',
  }
  return (
    <Card style={style}>
      <Link to={`/project/${props.id}`} style={{ height: '100%' }}>
        <Card.Img variant='top' src={props.media[0]} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

const Portfolio = () => {
  const style: CSSProperties = {
    display: 'grid',
    width: '100vw',
    maxWidth: '100vw',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, 24rem)',
    gap: '4rem',
  }
  return (
    <>
      <Container style={style}>
        {projects.map((project, index) => {
          project = projects[projects.length - 1 - index]
          return (
            <PortfolioProject
              key={project.id}
              name={project.name}
              desc={project.description}
              media={project.media}
              id={project.id}
            />
          )
        })}
      </Container>
      <br />
      <h4 className='text-center'>
        This website is also part of my portfolio. It is built with React and
        TypeScript. <br />
        <a target='_blank' href='https://github.com/CodeForBeauty/Presonal'>
          Github
        </a>
      </h4>
    </>
  )
}

export default Portfolio
