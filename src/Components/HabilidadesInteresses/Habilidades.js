import React, { Component } from 'react';
import Tag from './Tag';
import '../../stylesheet/TagsArea.css';


class Habilidades extends Component {
    
  render() {
    var habilidades = [
        {
            title: 'Metodologias Ágeis'
        },
        {
            title: 'Gamificação'
        },
        {
            title: 'Marketing Digital'
        },
        {
            title: 'Prototipagem'
        },
        {
            title: 'UX/UI'
        },
        {
            title: 'Pacote Office'
        },
        {
            title: 'Excel Avançado'
        },
        {
            title: 'Inglês Intermediário'
        },
        {
            title: 'Modelagem de Bancos'
        },
        {
            title: 'Elicitação de Requisitos'
        },
        {
            title: 'Mapeamento de Processos'
        },
        {
            title: 'Planejamento de Medição'
        }
      ];

      return(
          <div className="TagsArea">
            <h1 className="AreaName">Hard Skills</h1>
            <div className="Tags">
                {habilidades.map((i) => {
                    return(
                        <Tag title={i.title}/> 
                    );   
                })}
            </div>
          </div>
      );
    }
}

export default Habilidades;