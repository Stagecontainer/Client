import { Container, CarouselBox, Btn } from "../styles/components/Carousel";
import { useState, useEffect } from "react";
import LeftIcon from "../assets/icon/left-arrow-icon.svg?react";
import RightIcon from "../assets/icon/right-arrow-icon.svg?react";

const Carousel = ({
  width,
  height,
  type: initialType = "both",
  step = 324,
  items = 4,
  components,
}) => {
  const [index, setIndex] = useState(0);
  const [type, setType] = useState(initialType);

  useEffect(() => {
    if (index !== 0) {
      setType("both");
    }
  }, [index]);

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
      {(type === "both" || type === "left") && (
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
      {(type === "both" || type === "right") && (
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
