import type { CSSProperties, JSX } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

const Project = (props: {
  name: string
  desc: JSX.Element
  media: string[]
  workedOn: string[]
}) => {
  const imageStyle: CSSProperties = {
    display: 'block',
    width: '80%',
    height: '100%',
    margin: 'auto',
    objectFit: 'contain'
  }
  return (
    <Container className='bg-body-secondary' style={{marginTop:'2rem', marginBottom:'2rem', padding: '1rem'}}>
      <Carousel
        interval={null}
        style={{ width: '100%', height: '40rem' }}
      >
        {props.media.map((file) => {
          return (
            <Carousel.Item key={file} style={{ height: '35rem', width: '100%' }}>
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
      <Container className='bg-body-tertiary'>
        <h4 style={{padding: '1rem', margin: '0.5rem'}}>{props.desc}</h4>
        <div style={{display: 'flex', flexDirection: 'row', padding: '2px'}}>
          {props.workedOn.map((el, index) => {
            return <h5 className='bg-body-secondary' key={index} style={{margin: '5px', padding:'3px'}} >{el}</h5>
          })}
        </div>
      </Container>
    </Container>
  )
}

export default Project
