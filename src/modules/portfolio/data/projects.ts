import placeholder from "../../../assets/placeholder-image.png"
import agilecoder from "../../../assets/agilecoder.png"
import seekersSaga from "../../../assets/seekers-saga.png"
import videoTV from "../../../assets/video-tv.png"
import ticTacToe from "../../../assets/tic-tac-toe.png"

const projects = [
  {
    title: 'Agile Coder',
    description: 'A personal landing page and project hub showcasing my ongoing work. Part of a broader effort to build the brand.',
    link: 'https://agilecoder.in',
    image: agilecoder,
    tech: ['NextJS', 'Markdown', 'TailwindCSS'],
    source: ''
  },
  {
    title: 'Seeker\'s Saga',
    description: 'A Full Stack Treasure Hunt Website, featured with interactive maps and puzzles to test your softskills.',
    link: 'https://seekers-saga.vercel.app',
    image: seekersSaga,
    tech: ['ReactJS', 'TailwindCSS', 'NodeJS', 'MongoDB'],
    source: 'https://github.com/iamsmruti/seekers_saga'
  },
  {
    title: 'Video TV',
    description: 'A Full Stack Video Sharing Platform. Easy to upload videos and share the url with friends.',
    link: 'https://video-tv.vercel.app/',
    image: videoTV,
    tech: ['ReactJS', 'MongoDB', 'Cloudinary', 'NodeJS', 'ExpressJS'],
    source: 'https://github.com/iamsmruti/video-tv'
  },
  {
    title: 'Tic Tac Toe',
    description: 'This is a real-time multiplayer tic-tac-toe game. You can invite your friends to play together online.',
    link: 'https://crossedcircle.vercel.app/',
    image: ticTacToe,
    tech: ['ReactJS', 'MUI', 'NodeJS', 'MongoDB', 'Redux TK'],
    source: 'https://github.com/iamsmruti/tic-tac-toe'
  },
  {
    title: 'WebIQ',
    description: 'A browser extension (WIP) that tracks and categorizes tab usage to provide insightful reports on your internet habits.',
    link: '',
    image: placeholder,
    tech: ['Javascript', 'Chrome API', 'React'],
    source: ''
  },
  {
    title: 'Agile Ops',
    description: 'A pet CLI tool to organize .pem files and quickly connect to EC2 instances. Will extend to create a simple deploy tool.',
    link: '',
    image: placeholder,
    tech: ['NodeJS', 'Terraform'],
    source: ''
  },
  {
    title: 'Eris',
    description: 'A lightweight Electron browser with basic proctoring to block tab switching, screen changes, and common cheats during coding assessments.',
    link: '',
    image: placeholder,
    tech: ['ElectronJS', 'Javascript'],
    source: ''
  },
];

export default projects;