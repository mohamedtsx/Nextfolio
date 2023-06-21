import Hero from "@/components/hero/hero.component"


export default function Home() {
  return (
    <>
      <Hero />
      {
        ['home', 'about', 'projects', 'contact'].map(el => {
          return(
            <section key={el} id={el} className="flex justify-center items-center text-lg h-screen bg-slate-300">
              <h1>{el}</h1>
            </section>
          )
        })
      }
    </>
  )
}
