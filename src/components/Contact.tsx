import { Container } from 'react-bootstrap'
import type { CSSProperties } from 'react'

const Contact = () => {
  const style: CSSProperties = {
    padding: '2rem',
  }

  return (
    <Container style={style} className='text-center'>
      <h3>
        Contact me: 
      </h3>
      <span>
        <img src='emailLogo.png' style={{width: '2rem', margin: '10px'}} />
        Email:{' '}
        <a href='mailto:nursultanmamatov@proton.me'>
          nursultanmamatov@proton.me
        </a>
      </span>
      <span>
        <img src='githubLogo.png' style={{width: '2rem', margin: '10px'}} />
        Github:{' '}
        <a href='https://github.com/CodeForBeauty' target='_blank'>
          github.com/CodeForBeauty
        </a>
      </span>
    </Container>
  )
}

export default Contact
