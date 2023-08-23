import Header from "./components/Header";
import About from "./components/AboutUs";
import Solution from "./components/Solution";
import Learn from "./components/Learn";
import Team from "./components/Team";
import Contacts from "./Contacts";
import './styles/style.scss'

function App() {
  return (
    <>
    <Header />
    <About />
    <Solution />
    <div className="pureBlock">
      <Learn />
      <Team />
      <Contacts />
    </div>
    </>
  );
}

export default App;
