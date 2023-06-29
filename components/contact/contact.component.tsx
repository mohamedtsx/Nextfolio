import { FormEventHandler } from "react";
import Title from "../title/title.component";
 
const Contact = () => {

    const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const target = e.target as any;
        const submitBtn = target.querySelector("input[type='submit']");
        // submitBtn.style.backgroundColor = "red"
        



    }

    return(
        <section id="contact" className="section flex bg-graybg">
            <div className="container max-w-7xl px-4 flex flex-col items-center">
                <Title>Contact</Title>
                <div className="max-w-3xl -mt-20">
                    <div className="text-center font-medium">
                        Have a few questions or just want to say hello? Use the form below to get in touch with me!
                    </div>

                    <div className="border bg-white p-4 xl:p-10 my-12 rounded-md drop-shadow-sm">
                        <form action="" className="flex flex-col gap-6" onSubmit={submitHandler}>
                            <label className="font-semibold w-full flex flex-col gap-2">Name: 
                                <input type="text" name="name" placeholder="Enter Your Name" className="outline-none border-none rounded-md bg-graybg px-4 md:px-6 py-4" required/>
                            </label>
                            <label className="font-semibold w-full flex flex-col gap-2">Email: 
                                <input type="email" name="name" placeholder="Enter Your Email" className="outline-none border-none rounded-md bg-graybg px-4 md:px-6 py-4" required/>
                            </label>
                            <label className="font-semibold w-full flex flex-col gap-2">Message: 
                                <textarea placeholder="Enter Your Message" className="bg-graybg px-4 md:px-6 py-4 w-full h-40 md:h-60 resize-none outline-none rounded-md" required/>
                            </label>
                            <input type="submit" name="submit" value="Submit" id="submitBtn" className="transition duration-300 self-end px-12 py-2 cursor-pointer border border-green rounded-lg bg-green bg-opacity-20 hover:bg-opacity-40 text-gray-title uppercase font-medium whitespace-nowrap focus:bg-opacity-50"/>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;