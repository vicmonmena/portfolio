import React from "react"
import Avatar from './avatar';
import codewars from './../images/codewars.png'
import twitter from './../images/twitter.png'
import linkedin from './../images/linkedin.png'
import github from './../images/github.png'
import {SportsTennis, VideogameAsset, Code, Brush} from "@material-ui/icons"

const SideBar = () => {

  const styles = {
    width: '40px',
    height: '40px',
  }

  return (
    <div className='side-bar'>
      <div className='avatar-container'>
        <Avatar alText='Vicente Montaño Mena' title='Vicente Montaño Mena'/>
      </div>
      <div className='sidebar-info-container'>
        <div className='sidebar-info-item about'>
          <h3 className='sidebar-info-item-title'>Sobre mi</h3>
          <hr className="gradient_line" />
          <p>
            Hola! Mi nombre es Vicente y me considero un apasionado de la programación. 
            Siempre aprendiendo y tratando de fomentar esta cultura entre las personas con las que me relaciono.
            (Ya me lo decía mi madre desde pequeño todas las mañanas antes de ir al cole: - "Aprende y disfruta!!")
            Soy un amante de mi familia, en especial mi hija y mi mujer, que hacen que cada día quiera ser mejor persona.
            Seguidor del Betis. Aficionado al Tenis desde pequeño (gracias Papá!). Gamer en decadencia. :_(
            Humor como filosofía de vida y recientemente, he descubierto que me gusta dibujar :D
          </p>
        </div>
        <div className='sidebar-info-item'>
          <h3 className='sidebar-info-item-title'>Intereses / Aficiones</h3>
          <hr className="gradient_line" />
          <div className='interest'>
            <SportsTennis fontSize="large" className="interest-icons"/>
            <Code fontSize="large" className="interest-icons"/>
            <VideogameAsset fontSize="large" className="interest-icons"/>
            <Brush fontSize="large" className="interest-icons"/>
          </div>
        </div>
        <div className='sidebar-info-item'>
          <h3 className='sidebar-info-item-title'>Sígueme</h3>
          <hr className="gradient_line" />
          <div className='followme'>
            <a href="https://twitter.com/vicmonmena" target="_blank" rel="noopener noreferrer"><img style={styles} src={twitter} alt="Twitter" title="Twitter" /></a>
            <a href="https://github.com/vicmonmena" target="_blank" rel="noopener noreferrer"><img style={styles} src={github} alt="Github" title="Github" /></a>
            <a href="https://www.linkedin.com/in/vicmonmena/" target="_blank" rel="noopener noreferrer"><img style={styles} src={linkedin} alt="Linkedin" title="Linkedin" /></a>
            <a href="https://www.codewars.com/users/vicmonmena" target="_blank" rel="noopener noreferrer"><img style={styles} src={codewars} alt="Codewars" title="Codewars" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
