import { Nav } from "./components"
import Hero from "./sections/Hero"

const App = () => {
  
  return (
   <main className="relative">
    <Nav />
    <section className="sm:pl-16 pl-8 sm:pb-24 pb-12">
      <Hero />
    </section>
   </main>
  )
}

export default App
