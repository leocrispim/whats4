import React from 'react';
import styled from 'styled-components'
import WhatsArea from './Components/WhatsArea/WhatsArea';
import ListaDeMensagens from './Components/ListaDeMensagens/ListaDeMensagens';
import EnvioDeMensagens from './Components/EnvioDeMensagens/EnvioDeMensagens';


const MainContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`

const DivCustomizada = styled.div`
  display: flex;
  justify-content: ${ props => props.direcao };
  margin: 20px;
  > div{
    background-color: ${ props => props.bgcor };
    padding: 10px;
    border-radius: 8px;
  }
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listaDeMensagens: [],
    }
  }

  onCriaMensagem = (event) => {
    console.log(event)

    const maisUmaMensagem = {
      usuario: event.usuario,
      msgusuario: event.msgusuario
    }

    this.setState({
      listaDeMensagens: [...this.state.listaDeMensagens, maisUmaMensagem]
    })

  }

  apagaMensagem = (event) => {
    if(event.target.id=='spanid') return; 
    if(window.confirm("Tem certeza que deseja deletar essa mensagem?")){
      event.target.parentNode.parentNode.removeChild(event.target.parentNode); //apenas aceite
    }
  }

  render() {

    let listaCadaMensagem = this.state.listaDeMensagens.map((cadamensagem, index) => {
      if(cadamensagem.usuario == "eu:"){
        return(
          <DivCustomizada onDoubleClick={ this.apagaMensagem } direcao="flex-end" bgcor="#DCF8C6">
            <ListaDeMensagens
              key={index}
              msgusuario={cadamensagem.msgusuario}
          />
        </DivCustomizada>
        )
      }
      else{
        return(
          <DivCustomizada onDoubleClick={ this.apagaMensagem } bgcor="white">
          <ListaDeMensagens
            key={index}
            usuario={cadamensagem.usuario}
            msgusuario={cadamensagem.msgusuario}
          />
        </DivCustomizada>
        )
      }
    })

    return (
      <MainContainer>
        <WhatsArea>
          {listaCadaMensagem}
          <EnvioDeMensagens onCriaMensagem={this.onCriaMensagem}></EnvioDeMensagens>
        </WhatsArea>
      </MainContainer>
    )

  }

}

export default App;
