import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    position: relative;

    & .wrap {
        max-width: 100%;
        height: ${(props) => props.height}px;
        overflow: hidden;
    }
`;

const CarouselBox = styled.div`
    white-space: nowrap;
    transition: ease 2000ms;
`;


const Btn = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.height / 2}px;
  left: ${(props) => (props.arrow === "left" ? `-24px` : `calc(100% - 24px)`)};
  background-color: rgba(255, 255, 255, 90%);
  border: 1px solid rgba(0, 0, 0, 10%);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;
`;

export { Container, CarouselBox, Btn };
