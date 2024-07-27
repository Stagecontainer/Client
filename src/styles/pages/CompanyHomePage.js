import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px 0px 72px 0px;

    & > .wrap {
        width: 1281px;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
`;

export default Container;