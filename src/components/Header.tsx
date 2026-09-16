import { Navbar, Button } from 'react-bootstrap'
import type { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Header = (props: { onToggleDark: () => void; isDark: boolean }) => {
  const style: CSSProperties = {
    padding: '10px',
  }
  return (
    <header>
      <Navbar className='bg-body-secondary' style={style}>
        <Link to="/">
          <Button>
            Main
          </Button>
        </Link>
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
