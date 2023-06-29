import Hero from "@/components/hero/hero.component"
import About from "@/components/about/about.component"
import Projects from "@/components/projects/projects.component"
import Contact from "@/components/contact/contact.component"
import Blogs from "@/components/blogs/blogs.component"
import Layout from "@/components/layout/layout.component"


export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </Layout>
  )
}
