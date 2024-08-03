import { Container, CarouselBox, Btn } from "../styles/components/Carousel";
import { useState, useEffect } from "react";
import LeftIcon from "../assets/icon/left-arrow-icon.svg?react";
import RightIcon from "../assets/icon/right-arrow-icon.svg?react";

const Carousel = ({
  width,
  height,
  type = "both",
  step = 324,
  items = 4,
  components,
}) => {
  const [index, setIndex] = useState(0);
  const [carouselType, setCarouselType] = useState(type);

  useEffect(() => {
    if (index > 0 && carouselType !== "both") {
      setCarouselType("both");
    } else if (index === 0 && carouselType === "both") {
      setCarouselType(type); // 원래의 타입으로 되돌리기
    }
  }, [index, carouselType, type]);

  return (
    <Container height={height}>
      <div className="wrap">
        <CarouselBox
          style={{ transform: `translate3d(${-index * step}px, 0, 0)` }}
          height={height}
        >
          {components.map((component, _) => {
            return component;
          })}
        </CarouselBox>
      </div>
      {carouselType !== "right" && (
        <Btn
          height={height}
          arrow={"left"}
          onClick={() => {
            setIndex((prev) => (prev !== 0 ? prev - 1 : 0));
          }}
        >
          <LeftIcon />
        </Btn>
      )}
      {carouselType !== "left" && (
        <Btn
          height={height}
          arrow={"right"}
          onClick={() => {
            setIndex((prev) =>
              prev < components.length - items ? prev + 1 : prev
            );
          }}
        >
          <RightIcon />
        </Btn>
      )}
    </Container>
  );
};

export default Carousel;
