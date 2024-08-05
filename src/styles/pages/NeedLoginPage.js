import styled from "styled-components";

const Container = styled.div`
    min-width: 1440px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: #D9D9D9;

    display: flex;
    justify-content: center;
    align-items: center;
    & .modal {
        width: 628px;
        height: 300px;
        background-color: #FFFFFF;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;

        & > div {
            text-align: center;
            line-height: 40px;
            & > span {
                font-size: 30px;
                font-weight: 700;
            }
        }
        & > button {
            width: 458px;
            height: 48px;
            border: none;
            background-color: ${(props) => props.theme.color.main};
            color : #FFFFFF;
            font-size: 18px;
        }
    }
`;

export {Container}