const LabelField = ({ children, label, valid = true, subText = "" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <span
        style={
          !valid
            ? { color: "#FF0004", fontSize: "16px", fontWeight: "500" }
            : { fontSize: "16px", fontWeight: "500" }
        }
      >
        
        {!valid ? label + "*" : label}
      </span>
      {subText !== "" ? <span style={{fontSize : "12px", color : "#4D4D4D"}} dangerouslySetInnerHTML={{__html : subText}}></span> : ""}
      {children}
    </div>
  );
};

export default LabelField;
