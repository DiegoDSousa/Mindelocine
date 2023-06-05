import "./about.css"
const AboutPage=()=>{
    return(
        <div className="AboutPage">
            <div className="main_card">
            <div className="title">
                    <p>MindelCine</p>
                </div>
                <div className="Informations">
                    <p>Uma plataforma de organizacao, visualizacao e apresentacao de conteudos
                        relacionados a filmes, utilizando React, Node.js e Mysql</p>
                    
                </div>
            </div>
            <div className="main_card">
                <div className="title">
                    <p>Creditos</p>
                </div>
                <div className="Informations">

                    <p>Universidade Tecnica do Atlantico</p>
                    <p>ISECMAR</p>
                    <p>Engenharia Informatica e Telecomunicações</p>
                    <p>Engenharia de Software.</p>
                    <p className="nome">Diego Sousa</p>
                </div>
            </div>
        </div>
    )
}
export default AboutPage