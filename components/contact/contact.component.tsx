import { FormEventHandler } from "react";
import Title from "../title/title.component";

import { useState } from "react"; 
import FormLoader from "../form-loader/form-loader.component";
import { FormLoaderAction } from "../form-loader/form-loader.component";
import * as formActions from '../../utils/form-actions'

const Contact = () => {
    const [action, setAction] = useState<FormLoaderAction>()


    const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        
        
        setAction(formActions.start());

        const formData: {[key: string]: string} = {}
        Array.from(e.currentTarget.elements).forEach((el: any) => {
            if(!el.name) return;
            formData[el.name] = el.value;
        });
        

        // do some validation here

        try {
            const response = await fetch('/api/mail', {
                method: 'post',
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if(response.ok) {
                setAction(formActions.success());
                setTimeout(() => {
                    setAction(undefined);
                }, 2000);
                (e.target as HTMLFormElement).reset();

            } else {
                setAction(formActions.failed(response.statusText));
            }


        } catch(error) {
            if(error instanceof Error) {
                setAction(formActions.failed(error.name));
            } else {
                setAction(formActions.failed('Unexpected Error'));
            }
        }




    };

    return(
        <section id="contact" className="section flex bg-graybg">
            <div className="container max-w-7xl px-4 flex flex-col items-center">
                <Title>Contact</Title>
                <div className="max-w-3xl -mt-20">
                    <div className="text-center font-medium">
                        Have a few questions or just want to say hello? Use the form below to get in touch with me!
                    </div>

                    <div className="border bg-white p-4 xl:p-10 my-12 rounded-md drop-shadow-sm">
                        <form action="" method="POST" className="flex flex-col gap-6" onSubmit={submitHandler}>
                            <label className="font-semibold w-full flex flex-col gap-2">Name: 
                                <input type="text" name="name" placeholder="Enter Your Name" className="outline-none border-none rounded-md bg-graybg px-4 md:px-6 py-4" required/>
                            </label>
                            <label className="font-semibold w-full flex flex-col gap-2">Email: 
                                <input type="email" name="email" placeholder="Enter Your Email" className="outline-none border-none rounded-md bg-graybg px-4 md:px-6 py-4" required/>
                            </label>
                            <label className="font-semibold w-full flex flex-col gap-2">Message: 
                                <textarea name="message" placeholder="Enter Your Message" className="bg-graybg px-4 md:px-6 py-4 w-full h-40 md:h-60 resize-none outline-none rounded-md" required/>
                            </label>
                            <div className="flex gap-4 justify-end items-end bg-white h-20 relative">
                                <FormLoader action={action}/>
                                <input type="submit" value="Submit" className="transition duration-300 self-end px-12 py-2 cursor-pointer border border-green rounded-lg bg-green bg-opacity-20 hover:bg-opacity-40 text-gray-title uppercase font-medium whitespace-nowrap focus:bg-opacity-50"/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;