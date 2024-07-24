import { useEffect, useState } from "react";
import {
  Container,
  Slider,
  Slide,
  SlideDots,
  SlideDot,
} from "../../styles/components/user/Slidershow";
import SlideIMG01 from "../../assets/slide-01.png";
import SlideIMG02 from "../../assets/slide-02.png";
import SlideIMG03 from "../../assets/slide-03.png";
import SlideIMG04 from "../../assets/slide-04.png";

const imgs = [SlideIMG01, SlideIMG02, SlideIMG03, SlideIMG04];
const delay = 5000;

const Slidershow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Container>
      <Slider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {imgs.map((src, index) => {
          return (
            <Slide key={index}>
              <img src={src} />
            </Slide>
          );
        })}
      </Slider>
      <SlideDots>
        {imgs.map((_, idx) => (
          <SlideDot
            key={idx}
            style={index === idx ? { background: "#FFFFFF" } : {}}
            onClick={() => setIndex(idx)}
          ></SlideDot>
        ))}
      </SlideDots>
    </Container>
  );
};

export default Slidershow;
