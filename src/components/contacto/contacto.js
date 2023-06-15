import React from "react"
import "./contact.css"
const Contact_page=()=>{
    return(
        <div className="contact_card">
            <form className="contact_form">
                <h1 className="contact_header">Contact page</h1>
                <div className="contact_controler">
                    <label className="input_name-contacto" >Nome</label>
                    <input type="text" name="nome" className="input-controler-contacto"></input>
                </div>
                <div className="contact_controler">
                    <label className="input_name-contacto">Email</label>
                    <input type="email" name="email" className="input-controler-contacto"></input>
                </div>
                <div className="contact_controler">
                    <label className="input_name-contacto">Conteudo</label>
                    <textarea name="conteudo"className="input-controler-conteudo"></textarea>
                </div>
                <div className="contact_controler">
                    <button className="contact-button">Enviar</button>
                </div>
            </form>
        </div>
        
    )   
}
export default Contact_page