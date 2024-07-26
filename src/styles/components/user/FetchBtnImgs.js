import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    gap: 24px;
    & {
        background-color: yellow;
    }
    & .btn-wrap {
        display: flex;
        gap: 12px;
    }
`;

export default Container