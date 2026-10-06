import Image from 'next/image'

const Contact = () => {
  return (
    <div className='text-center p-2'>
      <h3>Contact me:</h3>
      <span>
        <Image
          src='/emailLogo.png'
          alt='Email logo'
          width={1}
          height={1}
          style={{ width: '2rem', margin: '10px' }}
        />
        Email:{' '}
        <a href='mailto:nursultanmamatov@proton.me'>
          nursultanmamatov@proton.me
        </a>
      </span>
      <span>
        <Image
          src='/githubLogo.png'
          alt='Github logo'
          width={1}
          height={1}
          style={{ width: '2rem', margin: '10px' }}
        />
        Github:{' '}
        <a href='https://github.com/CodeForBeauty' target='_blank'>
          github.com/CodeForBeauty
        </a>
      </span>
      <span>
        <Image
          src='/linkedinLogo.png'
          alt='LinkedIn logo'
          width={1}
          height={1}
          style={{ width: '2rem', margin: '10px' }}
        />
        LinkedIn:{' '}
        <a
          href='https://www.linkedin.com/in/nursultan-mamatov-4b8b3939b'
          target='_blank'
        >
          linkedin.com/in/nursultan-mamatov-4b8b3939b
        </a>
      </span>
    </div>
  )
}

export default Contact
