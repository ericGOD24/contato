import React, { Component } from 'react';
import Projeto from './Projeto';
import '../../stylesheet/Projetos.css';


class Projetos extends Component {
    render() {
        var projetos = [
            {
                name: 'BabyWeb',
                cargo: 'Desenvolvedor',
                resumo: 'Site para contratação de babas, desenvolvido para a matéria de Orientação à Objetos da Universidade de Brasília',
                status: 'Terminado',
                link: 'Phe0/Nuntium'
            },
            {
                name: 'Kalkuli',
                cargo: 'Desenvolvedor',
                resumo: 'Site que compara os dados de deputados da câmara com sua opnião sobre propostas de lei e assim mostrando a compatibilidade com os parlamentares.',
                status: 'Terminado',
                link: 'fga-eps-mds/2018.2-Kalkuli'
            },
            {
                name: 'Currículo Online',
                cargo: 'Desenvolvedor',
                resumo: 'Site destinado para o compartilhamento do meu currículo pessoal(este mesmo)',
                status: 'Terminado',
                link: 'ericGOD24/contato'
            }
          ];
    
          return(
              <div className="ProjetosArea">
                <h1 className="AreaName">Projetos</h1>
                <div className="Projetos">
                    {projetos.map((i) => {
                        return(
                            <Projeto name={i.name} cargo ={i.cargo} resumo={i.resumo} status={i.status} link={i.link}/> 
                        );   
                    })}
                </div>
              </div>
          );
        }
}

export default Projetos;