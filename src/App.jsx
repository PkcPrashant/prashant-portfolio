import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main className="w-100 mx-auto px-2 d-flex flex-column gap-3" style={{maxWidth: '1100px'}}>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        {/* <section id="projects"><Projects /></section> */}
        <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}

export default App;