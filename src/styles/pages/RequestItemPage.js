import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0px;

    & > .wrap {
        width: 1134px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default Container;