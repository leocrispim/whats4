import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const EnvioDeMensagensContainer = styled.div`
    display: flex;
    height: 50px;
`

const StyledInput = styled.input`
    width: ${ props => props.comprimento};
    height: 20px;
    border-radius: 8px;
    padding: 5px;
    margin: 5px;
    border: 0px transparent;
`

const StyledButton = styled.button`
    height: 30px;
    border-radius: 8px;
    border: 0px transparent;
    padding: 5px;
    margin: 5px;
`

class EnvioDeMensagens extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            usuario: "",
            msgusuario: ""
        }
    }

    onChangeUsuario = (event) => {
        this.setState({
            usuario: event.target.value
        })
    }

    onChangeMSGUsuario = (event) => {
        this.setState({
            msgusuario: event.target.value
        })
    }

    criarMsg = () => {
        if(this.state.usuario === ""){
            this.props.onCriaMensagem({
                usuario: this.state.usuario,
                msgusuario: this.state.msgusuario
            })
            this.setState({
                msgusuario: ""
            })
        }
        else{
            this.props.onCriaMensagem({
                usuario: this.state.usuario + ":",
                msgusuario: this.state.msgusuario
            })
            this.setState({
                msgusuario: ""
            })
        }
    }

    aoApertarEnter = (event) => {
        if(event.keyCode === 13){
            if(this.state.usuario === ""){
                this.props.onCriaMensagem({
                    usuario: this.state.usuario,
                    msgusuario: this.state.msgusuario
                })
                this.setState({
                    msgusuario: ""
                })
            }
            else{
                this.props.onCriaMensagem({
                    usuario: this.state.usuario + ":",
                    msgusuario: this.state.msgusuario
                })
                this.setState({
                    msgusuario: ""
                })
            }
        }
    }

    render() {
        return (
            <EnvioDeMensagensContainer>
                <StyledInput comprimento="7vw" type="text" placeholder="Usuario" value={this.props.usuario} onChange={this.onChangeUsuario}></StyledInput>
                <StyledInput comprimento="48vw" type="text" placeholder="Mensagem" value={this.state.msgusuario} onChange={this.onChangeMSGUsuario} onKeyDown={this.aoApertarEnter}></StyledInput>
                <StyledButton onClick={this.criarMsg}>Enviar</StyledButton>
            </EnvioDeMensagensContainer>
        )
    }

}

EnvioDeMensagens.propTypes = {
    usuario: PropTypes.string.isRequired,
    msgusuario: PropTypes.string.isRequired
}

export default EnvioDeMensagens