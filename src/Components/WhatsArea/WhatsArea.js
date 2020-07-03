import React from 'react'
import styled from 'styled-components'

const WhatsContainer = styled.div`
    border: solid black 1px;
    height: 99vh;
    width: 50vw;
    margin: 0, auto;
    margin-left: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #E5DDD5;
`


function WhatsArea(props) {
    return (
        <WhatsContainer>
            {props.children}
        </WhatsContainer>
    )
}


export default WhatsArea