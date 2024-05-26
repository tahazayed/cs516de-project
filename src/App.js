import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Header />
      <div className="page-content">
        <Intro />
        <About />
        <Skills />
        <WorkExperience />
        <Education />
		<Blog />
        <Contact />
      </div>
<Footer />
    </div>
  );
}


export default App;
