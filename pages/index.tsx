import Hero from "@/components/hero/hero.component"
import About from "@/components/about/about.component"
import Projects from "@/components/projects/projects.component"
import Contact from "@/components/contact/contact.component"
import Blogs from "@/components/blogs/blogs.component"


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </>
  )
}
