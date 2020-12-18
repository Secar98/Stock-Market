import styled from "styled-components";

const BorderDiv = styled.div`
  border: 1px solid black;
`;

const BorderDivMarket = styled.div`
  a {
    border: 1px solid black;
  }
`;
const StyledCard = styled.div`
  background: #faf9c1;
  border: transparent;
`;
const StyledBadge = styled.span `
  background: #faf9c1; 
  color: black; 
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 200;
  .arrowup{
      color:#0fc90f;
  }
  .arrowdown{
      color:red;
  }
`
const StyledButton = styled.button`
    background: #21a09a;
    color:#faf9c1;
    font-family:inherit;
    border: transparent;
    border-radius: 5%;
`


export { BorderDiv, BorderDivMarket, StyledCard, StyledBadge, StyledButton};
