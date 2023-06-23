import Hero from "@/components/hero/hero.component"
import About from "@/components/about/about.component"
import Projects from "@/components/projects/projects.component"


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />

      {
        ['contact'].map(el => {
          return(

            <section key={el} id={el} className="section bg-slate-300">
              <div className="container">
                <h1>{el}</h1>
              </div>
            </section>
          )
        })
      }
    </>
  )
}
