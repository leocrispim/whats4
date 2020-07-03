import React from 'react'
import styled from 'styled-components'

const ListaDeMensagensContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 20px;
`

const DivMensagem = styled.div`
`

const SpanCustomizado = styled.span`
    font-weight: ${ props => props.pesofonte};
    display: block;
`

class ListaDeMensagens extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <ListaDeMensagensContainer>
                <DivMensagem>
                    <SpanCustomizado id="spanid" pesofonte="bold"> {this.props.usuario} </SpanCustomizado>
                    <SpanCustomizado id="spanid"> {this.props.msgusuario} </SpanCustomizado>
                </DivMensagem>
            </ListaDeMensagensContainer>
        )
    }

}


export default ListaDeMensagens