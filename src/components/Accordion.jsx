import { useState } from "react";
import { Container } from "../styles/components/Accordion";

const Accordion = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <Container>
      <div className="contentWrapper"></div>
      <footer>
        <button onClick={() => setIsCollapse((prev) => !prev)}>
          {isCollapse ? "닫기" : "열기"}
        </button>
      </footer>
    </Container>
  );
};

export default Accordion;
