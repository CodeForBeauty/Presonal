import type { CSSProperties } from 'react'

const Footer = () => {
  const style: CSSProperties = {
    padding: '1rem',
  }
  return (
    <footer style={style} className='bg-body-secondary text-center'>
      © 2025 Nursultan Mamatov. All rights reserved
    </footer>
  )
}

export default Footer
