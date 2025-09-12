import type { CSSProperties, JSX } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

const Project = (props: {
  name: string
  desc: JSX.Element
  media: string[]
}) => {
  const imageStyle: CSSProperties = {
    display: 'block',
    width: '80%',
    margin: 'auto',
  }
  return (
    <Container>
      <Carousel
        interval={null}
        style={{ width: '100%', height: 'fit-content' }}
      >
        {props.media.map((file) => {
          return (
            <Carousel.Item key={file} style={{ width: '100%' }}>
              {file.endsWith('.mp4') ? (
                <video controls style={imageStyle}>
                  <source src={file} />
                </video>
              ) : (
                <Image src={file} style={imageStyle} />
              )}
            </Carousel.Item>
          )
        })}
      </Carousel>
      <Container>
        <h4 style={{padding: '1rem', margin: '0.5rem'}} className='bg-body-secondary'>{props.desc}</h4>
      </Container>
    </Container>
  )
}

export default Project
