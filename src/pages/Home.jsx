import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';

const Home = (props) => {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <Experience />
      <Projects />
    </>
  );
};

Home.propTypes = {};

export default Home;
