import { Navbar, NavLink, Button } from 'react-bootstrap'
import type { CSSProperties } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'

const Header = (props: { onToggleDark: () => void; isDark: any }) => {
  const style: CSSProperties = {
    padding: '10px',
  }
  return (
    <header>
      <Navbar className='bg-body-secondary'>
        <LinkContainer to='/' style={style}>
          <NavLink>
            <span>About me</span>
          </NavLink>
        </LinkContainer>
        <LinkContainer to='/portfolio' style={style}>
          <NavLink>Portfolio</NavLink>
        </LinkContainer>
        <LinkContainer to='/contact' style={style}>
          <NavLink>Contact</NavLink>
        </LinkContainer>
        <Button onClick={props.onToggleDark}>
          {props.isDark ? 'light' : 'dark'}
        </Button>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  isDark: PropTypes.bool,
  onToggleDark: PropTypes.func,
}

export default Header
