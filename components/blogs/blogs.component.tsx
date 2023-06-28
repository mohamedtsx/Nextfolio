import Title from "../title/title.component"
import BlogCard from "../blog-card/blog-card.component"
import data from "../../data/data.json";

const Blogs = () => {
    const allBlogs = data.blogs;
    return ( 
        <section className=" py-24 bg-white">
            <div className="container max-w-7xl px-4">
                <Title>Blog</Title>
                <div className="flex justify-between gap-6 items-center overflow-x-scroll">
                    {
                        allBlogs.map(el => {
                            return <BlogCard key={el.staticImageName} blog={el}/>
                        })
                    }
                </div>
            </div>
            
        </section>
    )
}

export default Blogs