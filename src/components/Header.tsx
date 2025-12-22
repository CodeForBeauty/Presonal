import { Navbar, NavLink, Button } from 'react-bootstrap'
import type { CSSProperties } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'

const Header = (props: { onToggleDark: () => void; isDark: boolean }) => {
  const style: CSSProperties = {
    padding: '10px',
  }
  return (
    <header>
      <Navbar className='bg-body-secondary' style={style}>
        <LinkContainer to='/portfolio' style={style}>
          <NavLink>Portfolio</NavLink>
        </LinkContainer>
        <LinkContainer to='/contact' style={style}>
          <NavLink>Contact</NavLink>
        </LinkContainer>
        <Button onClick={props.onToggleDark} style={{marginLeft: 'auto'}}>
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
