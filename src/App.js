import './App.css';
import Footer from './Components/Footer';
import JobsCard from './Components/JobsCard';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Section />
      <JobsCard />
      <Footer />
    </div>
  );
}

export default App;
