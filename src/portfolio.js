
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'IK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ishaan Kumar',
  role: 'Front End Engineer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Frontend-focused developer with hands-on experience in building full-stack web applications using React.js, Node.js, and modern databases. I enjoy creating clean, responsive user interfaces and translating ideas into reliable, real-world products.',
resume: `${process.env.PUBLIC_URL}/Ishaan_Kumar_Resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/ishaankumar1606',
    github: 'https://github.com/Ishaan1606'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SensAI – AI-Integrated Learning Platform',
    description:
      'SensAI is a full-stack AI-integrated learning platform that helps students enhance their career readiness through AI-powered resume analysis and interview preparation. Built with a responsive frontend and scalable backend, the platform delivers personalized insights to improve learning outcomes and user engagement.',
    stack: ['FrontEnd - React.js, JavaScript, HTML, CSS, Tailwind CSS   Backend - Node.js, Express.js  DataBase - PostgreSQL   API - OpenAI API Tools-Git, GitHub, Vercel'],
    sourceCode: 'https://github.com/Ishaan1606/sensaii',
    livePreview: 'https://sensaii-vwfu.vercel.app/',
    image: 'https://i.postimg.cc/nLDb4zsx/sensai.png',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Ishaankumar059@gmail.com',
}

export { header, about, projects, skills, contact }
