import styled from 'styled-components'

const Container = styled.div`
background-image: linear-gradient(to bottom right,  #21a09a, #fffc66); 
width: 100vw;
min-height:100vh;
max-height: 100%;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size:1.2rem;
a{
    color:black;
    &:hover{
        color:#fffc66;
        text-decoration:none;
    }

}
`

const NavBar = styled.nav `
background: transparent

`

const LinkStyle = styled.p `
    a{
        color:black;
        font-size: 1.5rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: 800;
        &:hover{
            color:#fffc66;
            text-decoration: none;

        }
    }
`

export {Container, NavBar, LinkStyle};