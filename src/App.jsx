import Header from './components/Header';
import Footer from './components/Footer';
import { CheckOutWork } from './components/CheckOutWork';
import { Projects } from './components/Projects';
import { useState } from 'react';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const projects = {
   todo: {
      title: 'Todo app',
      flink: 'https://github.com/Noel-byte/todoapp-frontend',
      blink: 'https://github.com/Noel-byte/todoapp-backend',
      weblink: 'https://todofrontapp.netlify.app',
      tech: [
        { frontend: 'React.js + Tailwind CSS' },
        { backend: 'Express.js + Node.js' },
        { database: 'MongoDB' },
      ],
    },
  portfolio: {
      
      title: 'Portfolio Website',
      flink: 'https://github.com/Noel-byte/Portfolio',
      blink: undefined,
      weblink: 'https://ntesfe.netlify.app',
      tech: [{ frontend: 'React.js + Tailwind CSS' }],
    },
  };
  const handleClick = () => {
    //first load all the projects available
    // show all the available project list
    setShowProjects((prev) => !prev);
  };
  return (
    <div className=' bg-backcolor'>
      <Header />
      <CheckOutWork
        handleClick={handleClick}
        label={showProjects ? 'Hide Work' : 'Check Out Work'}
      />
      {showProjects && <Projects projects={projects} />}
      <Footer />
    </div>
  );
}

export default App;
