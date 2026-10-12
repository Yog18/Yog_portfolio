
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <footer id="contact">
        <h2>Contact Me</h2>
        <p>Let's connect and learn together!</p>
        <p>Made with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
