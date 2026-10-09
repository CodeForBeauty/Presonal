export default function About() {
  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='w-screen max-w-5xl p-4'>
        <h2 className='text-xl'>
          The person behind the code: Nursultan Mamatov
        </h2>
        <div className='mt-2'>
          <p className='mb-4'>
            <b>C++ Engineer | Backend Engineer | Unity Develoer</b>
          </p>
          <p>
            I'm a freelancer/contractor with 5 years of experience as an
            independent software and game developer.
          </p>
          <p>
            My specialty is real-time systems such as games, backend systems and
            desktop applications but I'm capable of many things.
          </p>

          <div className='max-w-3xl ml-auto mr-auto mt-2'>
            <p>
              <b>My work stack:</b>
            </p>
            <p>Languages: C++, C#, Python, JavaScript/TypeScript, Go</p>
            <p>Frameworks: .NET, Nest.js, Flask, Django, Next.js, React.js</p>
            <p>Tools: Git, Docker</p>
            <p>Engines: Unity, Unreal Engine</p>
          </div>
        </div>
      </div>
    </div>
  )
}
