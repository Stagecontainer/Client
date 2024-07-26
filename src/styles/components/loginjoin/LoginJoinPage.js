import styled from "styled-components";

const Form = styled.div`

  background-color: white;
  padding: 72px 0;
  border-radius: 8px;
  box-shadow: 2px 4px 16px 0px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 628px;



    & .title{
        font-size:30px;
        font-weight:700;
        line-height:normal;
        display:flex;
        flex-direction: column;
        align-items: center;   
    }
    & .wrap{
        margin:48px 85px;
        
    }
`;



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
}`;

const Input = styled.input`
  width: 458px;
  height: 48px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 8px 0 12px 0;

`;

const Progress = styled.div`
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







export { Container, Form, Input, Progress };