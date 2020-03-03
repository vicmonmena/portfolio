import React from "react"
import Avatar from './avatar';
import tennis from './../images/tennis.png'
import programming from './../images/programming.png'
import videogames from './../images/videogames.png'
import drawing from './../images/drawing.png'
import codewars from './../images/codewars.png'
import twitter from './../images/twitter.png'
import linkedin from './../images/linkedin.png'
import github from './../images/github.png'

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
            Siempre aprendiendo y tratando de crear esta cultura entre las personas con las que trabajo.
            Soy un amante de mi familia, en especial mi hija y mi mujer, que hacen que cada día quiera ser mejor persona.
            Seguidor del Betis. Aficionado al Tenis desde pequeño (gracias Papá!). Gamer en decadencia. :_(
            Humor como filosofía de vida y recientemente, he descubierto que me gusta dibujar :D
          </p>
        </div>
        <div className='sidebar-info-item'>
          <h3 className='sidebar-info-item-title'>Intereses / Aficiones</h3>
          <hr className="gradient_line" />
          <div className='interest'>
            <img style={styles} src={tennis} alt="Tenis" title="Tenis" />
            <img style={styles} src={programming} alt="Programación" title="Programación" />
            <img style={styles} src={videogames} alt="Videojuegos" title="Videojuegos" />
            <img style={styles} src={drawing} alt="Dibujar" title="Dibujar" />
          </div>
        </div>
        <div className='sidebar-info-item'>
          <h3 className='sidebar-info-item-title'>Follow me</h3>
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
