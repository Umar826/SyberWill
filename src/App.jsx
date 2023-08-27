import Header from "./components/Header";
import About from "./components/AboutUs";
import Solution from "./components/Solution";
import Learn from "./components/Learn";
import Team from "./components/Team";
import Contacts from "./Contacts";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import './styles/style.scss'
import TeamAdaptive from "./components/Team/TeamAdaptive";

function App() {
  return (
    <>
    <Header />
    <About />
    <Solution />
    <div className="pureBlock">
      <Learn />
      <Team />
      <TeamAdaptive />
      <Contacts />
      <Pricing />
      <Footer />
    </div>
    </>
  );
}

export default App;
