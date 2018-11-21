import React, { Component } from 'react';
import Tag from './Tag';
import '../../stylesheet/TagsArea.css';


class SoftSkills extends Component {
    
  render() {
    var interesses = [
        {
            title: 'Proatividade'
        },
        {
            title: 'Liderança'
        },
        {
            title: 'Empatia'
        },
        {
            title: 'Trabalho em Equipe'
        },
        {
            title: 'Comunicação Efetiva'
        }
      ];

      return(
          <div className="TagsArea" id="Interesses">
            <h1 className="AreaName">Soft Skills</h1>
            <div className="Tags">
                {interesses.map((i) => {
                    return(
                        <Tag title={i.title}/> 
                    );   
                })}
            </div>
          </div>
      );
    }
}

export default SoftSkills;