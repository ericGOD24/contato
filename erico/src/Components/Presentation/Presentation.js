import React, { Component } from 'react';
import '../../stylesheet/Presentation.css';
import seta from '../../img/arrow-white.svg'


class Presentation extends Component {
  render() {
    return (
      <div className="Presentation">
        <img className="foto" src={require('../../img/erico')} alt="Foto Erico" />
        <h2 className="nome" >Érico Maximiano Bandeira</h2>
        <p className="resumo" >Graduando de Engenharia de Software<br></br>
        Brasileiro, Solteiro, 22 Anos
        </p>
        <div className="area">
          <a href="#habilidades-interesses">
            <div className="wrapper">
              <img className="seta-pulse" src = {seta} alt="seta"/>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Presentation;