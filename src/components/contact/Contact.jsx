import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rla0jym', 'template_tpb1pah', form.current, 'u2bO8s2feLbMstY4A')
    .then((result) => {
      window.alert("Mensagem Enviada");
  }, (error) => {
      window.alert("Erro ao Enviar");
  });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Entre em Contato</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>thiago.mendes-e@hotmail.com</h5>
            <a href="mailto:thiago.mendes-e@hotmail.com" target="_blank">Enviar mensagem</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Thiago Mendes</h5>
            <a href="https://m.me/thiagomendes92dev" target="_blank">Enviar mensagem</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 16 992140123</h5>
            <a href="https://api.whatsapp.com/send?phone=016992140123" target="_blank">Enviar mensagem</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu email completo' required />
          <textarea name="message" rows="7" placeholder='Escreva aqui sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact