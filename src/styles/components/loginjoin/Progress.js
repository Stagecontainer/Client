import styled from "styled-components";

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  margin-top:32px;

  & span{
    font-size:14px;
    line-height: 150%; 
    text-align: center;
    color: ${(props) => props.theme.color.gray40};
  }
  
  & > .active{
    color: ${(props) => props.theme.color.gray100};
  }

`;

export default Head;