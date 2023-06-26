import Button from "../button/button.component";
import Title from "../title/title.component";
 
const Contact = () => {

    return(
        <section className="section flex bg-whfont-medium">
            <div className="container max-w-7xl px-4 flex flex-col items-center">
                <Title>Contact</Title>
                <div className="max-w-3xl -mt-20">
                    <div className="text-center mb-10">
                        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                    </div>

                    <div className="border">
                        <form className="flex flex-col p-4 gap-6">
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-semibold">Name: </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="outline-none border-none rounded-md bg-graybg px-6 py-4" required/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-semibold">Email: </label>
                                <input type="email" name="name" placeholder="Enter Your Email" className="outline-none border-none rounded-md bg-graybg px-6 py-4" required/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-semibold">Message: </label>
                                <textarea placeholder="Enter Your Message" className="bg-graybg px-6 py-4 w-full h-60 resize-none outline-none rounded-md" />
                            </div>
                            <input className="self-end px-12 py-2 cursor-pointer border border-green rounded-lg hover:bg-green hover:bg-opacity-20 uppercase font-medium whitespace-nowrap" type="submit" name="submit" value="Submit"/>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;