import { Container } from 'react-bootstrap'
import type { CSSProperties } from 'react'

const Contact = () => {
  const style: CSSProperties = {
    padding: '2rem',
  }

  return (
    <Container style={style} className='text-center'>
      <span>
        Email:{' '}
        <a href='mailto:nursultanmamatov@proton.me'>
          nursultanmamatov@proton.me
        </a>
      </span>
    </Container>
  )
}

export default Contact
