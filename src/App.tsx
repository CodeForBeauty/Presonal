import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import { Container } from 'react-bootstrap'
import { useEffect, useState, type CSSProperties } from 'react'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const tmp = window.localStorage.getItem('dark')
    if (tmp !== null) {
      setIsDark(tmp === 'true')
    }
  }, [])

  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: 0,
  }
  if (isDark) {
    style.color = 'white'
  }

  const handleToggleDark = () => {
    window.localStorage.setItem('dark', !isDark ? 'true' : 'false')
    setIsDark(!isDark)
  }

  return (
    <Container fluid style={style} data-bs-theme={isDark ? 'dark' : 'light'}>
      <Header onToggleDark={handleToggleDark} isDark={isDark} />
      <Content />
      <Footer />
    </Container>
  )
}

export default App
