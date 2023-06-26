import Hero from "@/components/hero/hero.component"
import About from "@/components/about/about.component"
import Projects from "@/components/projects/projects.component"
import Contact from "@/components/contact/contact.component"


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <section className="section bg-red">
        <div className="container">

        </div>
      </section>
      <Contact />
    </>
  )
}
