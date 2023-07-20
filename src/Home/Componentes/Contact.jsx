import React, { useState } from 'react';
import emailjs from '@emailjs/browser'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if(name === '' || email === '' || message === '' ){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_wdd8q05", "template_sfxj9nj", templateParams, "A8hEmAHpQAC4Ybtxh")
        .then((response) => {
            alert("Email enviado!", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (erro) => {
            console.log("Error", erro)
        })
    }

    return (
        <div>
            <section className="w-[95%] h-[45%] m-auto mt-20 p-20 flex items-center justify-evenly gap-[35%] bg-[#1c6697] rounded-lg 
            max-md:w-[155%] max-md:flex-col max-md:items-center max-md:gap-20
            ">
                <div className="w-[40%] flex flex-col gap-4
                max-md:w-[100%] 
                ">
                    <h2 className="text-white text-4xl
                    max-md:text-2xl max-md:text-center
                    ">Entre em contato comigo!</h2>
                    <a className='text-[#0EE6B7] text-[20px] bg-[#0b4164] w-[35%] text-center rounded-xl p-2' href="https://linktr.ee/willianrizzo">Meu Linktree</a>
                </div>
                <div className="w-[45%]  flex flex-col gap-6 pl-5 pt-10 pb-5 bg-[#fdfdfd6c] rounded-lg
                max-md:w-[150%]
                ">

                    <form className='form flex flex-col gap-6' onSubmit={sendEmail}>
                        <input className='w-[95%] bg-[#f5f5f5] p-2 rounded-md'
                            type="text"
                            placeholder='Nome'
                            onChange={(e) => setName(e.target.value)}
                            value={name} />


                        <input className='w-[95%] bg-[#f5f5f5] p-2 rounded-md'
                            type="text"
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />

                        <textarea className='w-[95%] bg-[#f5f5f5] p-2 rounded-md'
                            placeholder='Escreva sua mensagem'
                            name=""
                            id=""
                            cols="15"
                            rows="6"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        ></textarea>
                        <button type='submit' className='p-3 bg-[#0b4164] w-[25%] text-[#0EE6B7] rounded-lg'>Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Contact