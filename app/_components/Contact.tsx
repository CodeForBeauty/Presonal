import Image from 'next/image'

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      <h3 className='text-lg'>Links:</h3>
      <div className='flex text-center gap-4 p-2 overflow-auto flex-wrap'>
        <a
          href='mailto:nursultanmamatov@proton.me'
          className='text-primary underline'
        >
          <div className='flex'>
            <Image
              src='/emailLogo.png'
              alt='Email logo'
              width={1}
              height={1}
              style={{ width: '2rem', margin: '10px' }}
            />
            <p className='content-center'>Email: nursultanmamatov@proton.me</p>
          </div>
        </a>
        <a
          href='https://github.com/CodeForBeauty'
          target='_blank'
          className='text-primary underline'
        >
          <div className='flex'>
            <Image
              src='/githubLogo.png'
              alt='Github logo'
              width={1}
              height={1}
              style={{ width: '2rem', margin: '10px' }}
            />
            <p className='content-center'>Github: github.com/CodeForBeauty</p>
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/nursultan-mamatov-4b8b3939b'
          target='_blank'
          className='text-primary underline'
        >
          <div className='flex'>
            <Image
              src='/linkedinLogo.png'
              alt='LinkedIn logo'
              width={1}
              height={1}
              style={{ width: '2rem', margin: '10px' }}
            />
            <p className='content-center'>
              LinkedIn: linkedin.com/in/nursultan-mamatov-4b8b3939b
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
