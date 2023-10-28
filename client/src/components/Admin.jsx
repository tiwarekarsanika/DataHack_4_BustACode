import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

const Container = styled.div`
width:80%;
height:70%;
border-radius:20px;
display:flex;
flex-direction:column;
box-shadow: 0 0 20px hsl(0, 0%, 81%);
padding:2rem;
font-weight:900;
font-size:3rem;
`
const NameContainer = styled.div`
width:100;
font-size:2rem;
`
const DiscContainer = styled.div`
width:100;
font-size:2rem;
`
const Entry = styled.input`
width:60%;
height:2rem;
padding-left:1rem;
focus:none;
`
const Admin = () => {
  return (
   <Wrapper>
    <Container>
    <div>Add lawyer details</div>
    <NameContainer>
    <div>Name</div>

        <Entry/>
    </NameContainer>
    <DiscContainer>
    <div>Description</div>

        <Entry/>
    </DiscContainer>

    </Container>
   </Wrapper>
  )
}

export default Admin
