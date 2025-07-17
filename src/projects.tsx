import type { JSX } from 'react'

interface Project {
  id: number
  name: string
  description: string
  media: string[]
  moreDesc: JSX.Element
}
export const projects: Project[] = [
  {
    id: 0,
    name: 'Falling Sand',
    description: 'Interactive falling sand simulation made with C++ and OpenGL',
    media: ['/FallingSand/FallingSand1.webp', '/FallingSand/FallingSand.mp4'],
    moreDesc: (
      <div>
        Interactive falling sand simulation made with C++ and OpenGL. <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/FallingSand'>
          Github
        </a>
      </div>
    ),
  },
  {
    id: 1,
    name: 'Game Of Life',
    description: "Conway's game of life simulation made with C++ and OpenGL",
    media: ['/GameOfLife/GameOfLife1.webp', '/GameOfLife/GameOfLife.mp4'],
    moreDesc: (
      <div>
        Conway's game of life simulation made with C++ and OpenGL. The
        calculations are run CPU. <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/GameOfLife'>
          Github
        </a>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Pirates',
    description: 'Online multiplayer game adaptation of a board game.',
    media: [
      '/Pirates/Pirates1.webp',
      '/Pirates/Pirates2.webp',
      '/Pirates/Pirates3.webp',
      '/Pirates/Pirates.mp4',
    ],
    moreDesc: (
      <div>
        Online multiplayer game adaptation of a board game. The server is
        written from scratch using .NET and tcp/websocket connection. The client
        was made in Unity.
      </div>
    ),
  },
  {
    id: 3,
    name: 'Astronaut',
    description: 'Game made from scratch with use of OpenGL.',
    media: [
      '/Astronaut/Astronaut1.webp',
      '/Astronaut/Astronaut2.webp',
      '/Astronaut/Astronaut3.webp',
      '/Astronaut/Astronaut.mp4',
    ],
    moreDesc: (
      <div>
        Game made from scratch with use of OpenGL. Physics simulation from
        scratch, PBR materials, dynamic shadows, skybox lighting, skeletal
        animation. <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/AstronautGame'>
          Github
        </a>
      </div>
    ),
  },
  {
    id: 4,
    name: 'Indie Crate',
    description: 'Web app, catalogue of indie games.',
    media: [
      '/IndieCrate/MainPage.webp',
      '/IndieCrate/DarkMode.webp',
      '/IndieCrate/GameView.webp',
    ],
    moreDesc: (
      <div>
        Web app, catalogue of indie games. React app with database on Supabase.{' '}
        <br />
        <a target='_bank' href='https://indiecrate.netlify.app'>
          Deployed
        </a>{' '}
        <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/IndieCrate'>
          Github
        </a>
      </div>
    ),
  },
]
