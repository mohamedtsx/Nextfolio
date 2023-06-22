import Hero from "@/components/hero/hero.component"
import About from "@/components/about/about.component"



export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {
        ['projects', 'contact'].map(el => {
          return(

            <section key={el} id={el} className="bg-slate-300">
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
