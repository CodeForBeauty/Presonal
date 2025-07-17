import type { CSSProperties, JSX } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

const Project = (props: {
  name: string
  desc: JSX.Element
  media: string[]
}) => {
  const imageStyle: CSSProperties = {
    display: 'block',
    height: '50rem',
    margin: 'auto',
  }
  return (
    <Container>
      <Carousel interval={null} style={{ height: '50rem' }}>
        {props.media.map((file) => {
          return (
            <Carousel.Item key={file} style={{ height: '50rem' }}>
              {file.endsWith('.mp4') ? (
                <video controls>
                  <source src={file} style={imageStyle} />
                </video>
              ) : (
                <Image src={file} style={imageStyle} />
              )}
            </Carousel.Item>
          )
        })}
      </Carousel>
      <Container>{props.desc}</Container>
    </Container>
  )
}

export default Project
