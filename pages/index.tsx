import Hero from "@/components/hero/hero.component"
import About from "@/components/about/about.component"
import Projects from "@/components/projects/projects.component"


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <section id="contact" className="section bg-slate-300">
        <div className="container">
          <h1>contact</h1>
        </div>
      </section>
    </>
  )
}
