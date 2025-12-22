import type { JSX } from 'react'

const projectFields = {
  Unity: 0,
  Cpp: 1,
  Webdev: 2,
  Mobile: 3,
}
export const fieldsList = [
  'Unity',
  'C++',
  'Webdev',
  'Mobile',
  'All',
]

interface Project {
  id: number
  name: string
  description: string
  media: string[]
  workedOn: string[]
  moreDesc: JSX.Element
  field: number
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
        All of the simulation is done on CPU. <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/FallingSand'>
          Github
        </a>
      </div>
    ),
    workedOn: ['OpenGL', 'C++'],
    field: projectFields.Cpp,
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
    workedOn: ['OpenGL', 'C++'],
    field: projectFields.Cpp,
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
        was made in Unity. SQLite is used as database to store account info.
      </div>
    ),
    workedOn: ['Multiplayer', 'C#', 'Custom server'],
    field: projectFields.Unity,
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
        scratch, PBR materials, dynamic shadows, skybox lighting, skinned meshes, 
        skeletal animation. <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/AstronautGame'>
          Github
        </a>
      </div>
    ),
    workedOn: ['OpenGL', '3D Engine', 'Physics Engine', 'Library design'],
    field: projectFields.Cpp,
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
        Web app, catalogue of indie games. React app with database on Supabase. The games are scraped from steam.
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
    workedOn: ['React'],
    field: projectFields.Webdev,
  },
  {
    id: 5,
    name: 'Todo React Native App',
    description: 'React native app for task management.',
    media: [
      '/TodoApp/EmptyView.png',
      '/TodoApp/AddView.png',
      '/TodoApp/MainView.png',
    ],
    moreDesc: (
      <div>
        React native app for task management.
        <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/TodoApp'>
          Github
        </a>
      </div>
    ),
    workedOn: ['React Native'],
    field: projectFields.Mobile,
  },
  {
    id: 6,
    name: 'Daily question',
    description: 'Web app, asking question a day.',
    media: [
      '/DailyQuestion/Login.png',
      '/DailyQuestion/EmptyView.png',
      '/DailyQuestion/AnswerForm.png',
      '/DailyQuestion/MainView.png',
    ],
    moreDesc: (
      <div>
        React website asking unique qestion every day. With backend on Express.js and database on Turso.
        <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/DailyQuestion'>
          Github
        </a>
      </div>
    ),
    workedOn: ['React', 'Express'],
    field: projectFields.Webdev,
  },
  {
    id: 7,
    name: 'Timeline of me',
    description: 'Web app, for documenting life events.',
    media: [
      '/TimelineOfMe/AddForm.png',
      '/TimelineOfMe/MainView.png',
      '/TimelineOfMe/Showcase.mp4',
    ],
    moreDesc: (
      <div>
        React website for capturing and viewing life events. With backend on Nest.js and database on PostgreSQL. And Docker setup.
        <br />
        <a target='_bank' href='https://github.com/CodeForBeauty/LifeTimeline'>
          Github
        </a>
      </div>
    ),
    workedOn: ['React', 'Nest.js', 'PostgreSQL'],
    field: projectFields.Webdev,
  },
  {
    id: 8,
    name: 'Dragon March',
    description: 'Mobile game.',
    media: [
      '/DragonMarch/Gameplay1.png',
      '/DragonMarch/Menu.png',
      '/DragonMarch/Gameplay2.png',
    ],
    moreDesc: (
      <div>
        Simple mobile game made with Unity.
      </div>
    ),
    workedOn: ['Unity', 'Mobile'],
    field: projectFields.Unity,
  },
  {
    id: 9,
    name: 'Bar',
    description: 'Mobile game.',
    media: [
      '/BarGame/Gameplay1.png',
      '/BarGame/Gameplay2.png',
      '/BarGame/Overview.png',
    ],
    moreDesc: (
      <div>
        Simple mobile game made with Unity.
      </div>
    ),
    workedOn: ['Unity', 'Mobile'],
    field: projectFields.Unity,
  },
  {
    id: 10,
    name: 'Echo Drift',
    description: 'Web game.',
    media: [
      '/EchoDrift/Gameplay1.png',
      '/EchoDrift/Menu.png',
      '/EchoDrift/Gameplay2.png',
    ],
    moreDesc: (
      <div>
        Simple web game made with Unity.
      </div>
    ),
    workedOn: ['Unity', 'Webgame'],
    field: projectFields.Unity,
  },
  {
    id: 11,
    name: 'Super Ping Pong Remake',
    description: 'Crossplatform game.',
    media: [
      '/PingPong/Gameplay.png',
      '/PingPong/Menu.png',
      '/PingPong/Overview.mp4',
    ],
    moreDesc: (
      <div>
        Super Ping Pong Sega remake with Unity.
      </div>
    ),
    workedOn: ['Unity'],
    field: projectFields.Unity,
  },
]
