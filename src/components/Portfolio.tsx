import { Container, Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { projects, fieldsList } from '../projects'
import { useState, type CSSProperties } from 'react'
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

const FieldBtn = (props: {
  text: string
  selected: boolean
  onClick: () => void
}) => {
  const style: CSSProperties = {
    margin: '5px',
  }

  return (
    <Button
      active={props.selected}
      onClick={props.onClick}
      style={style}
      variant='secondary'
    >
      {props.text}
    </Button>
  )
}

const Portfolio = () => {
  const [field, setField] = useState('All')

  const style: CSSProperties = {
    display: 'grid',
    width: '95vw',
    maxWidth: '100vw',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, 24rem)',
    gap: '4rem',
  }

  return (
    <>
      <Container
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {fieldsList.map((el, index) => {
          return (
            <FieldBtn
              text={el}
              selected={el === field}
              key={index}
              onClick={() => setField(el)}
            />
          )
        })}
      </Container>
      <Container style={style}>
        {projects
          .filter((el) => field === 'All' || fieldsList[el.field] == field)
          .map((project) => {
            //project = projects[projects.length - 1 - index]
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
    </>
  )
}

export default Portfolio
