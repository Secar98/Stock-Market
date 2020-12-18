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


export { BorderDiv, BorderDivMarket, StyledCard, StyledBadge};
