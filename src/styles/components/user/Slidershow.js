import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  height: 468px;
  position: relative;
  overflow: hidden;
`;

const Slider = styled.div`
  white-space: nowrap;
  transition: ease 2000ms;
`;

const Slide = styled.div`
  display: inline-block;

  width: 100%;
  height: 468px;

  & > img {
    width: 100%;
    height: auto;
  }
`;

const SlideDots = styled.div`
  display: flex;
  gap: 16px;

  position: absolute;
  top: 400px;
  left: 100px;
`;

const SlideDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.color.gray60};
`;

export { Container, Slider, Slide, SlideDots, SlideDot };
