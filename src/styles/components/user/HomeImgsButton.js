import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const Item = styled.div`
    width: 411px;
    height: 100px;
    background-color: gray;
    border: none;
    border-radius: 12px;
`;

export {Container, Item};