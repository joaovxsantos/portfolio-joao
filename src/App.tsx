import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact/>
        <Footer />
      </main>
    </>
  )
}
export default App