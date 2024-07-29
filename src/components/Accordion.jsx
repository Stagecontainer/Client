import { useCallback, useRef, useState } from "react";
import { Container, ContentWrap } from "../styles/components/Accordion";
import Arrow from "../assets/icon/arrow-icon.svg?react";

const Accordion = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const handleBtnClick = useCallback(
    (_) => {
      if (parentRef === null || childRef === null) return;
      console.log(parentRef.current.clientHeight);
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollapse((prev) => !prev);
    },
    [isCollapse]
  );

  return (
    <Container>
      <div className="contentWrapper"></div>
      <ContentWrap ref={parentRef}>
        <div ref={childRef}>{children}</div>
      </ContentWrap>
      <footer>
        <button onClick={handleBtnClick}>
          {isCollapse ? "접기" : "상세검색"}
          <div
            style={
              isCollapse
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0)" }
            }
          >
            <Arrow />
          </div>
        </button>
      </footer>
    </Container>
  );
};

export default Accordion;
