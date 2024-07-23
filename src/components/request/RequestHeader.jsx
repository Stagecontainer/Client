import SlashIcon from "../../assets/icon/slash-icon.svg?react";
import Container from "../../styles/components/request/RequestHeader";

const RequestHeader = ({ order, setOrder }) => {
  if (!order) return;

  const elements = [
    <span
      key={0}
      onClick={() => setOrder("request")}
      className={order === "request" ? "selected" : ""}
      style={order === "request" ? { color: "#FF7A00" } : {}}
    >
      소비
    </span>,
    <span
      key={1}
      onClick={() => setOrder("registration")}
      className={order === "registration" ? "selected" : ""}
    >
      제공
    </span>,
  ];
  const orderedElements =
    order === "request"
      ? [elements[0], <SlashIcon key={3} />, elements[1]]
      : [elements[1], <SlashIcon key={3} />, elements[0]];

  return <Container>{orderedElements}</Container>;
};

export default RequestHeader;
