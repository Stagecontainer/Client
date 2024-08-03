const Label = ({ children, label, valid }) => {
  return (
    <div style={{ display: "block", position:"relative", flexDirection: "column", lineheight: "140%", marginBottom:"24px" }}>
      <span style={ valid ? { fontSize: "16px", fontWeight: 500, color: "red"} : { fontSize: "16px", fontWeight: 500} }>
        {valid ? label + "*" : label}</span>
      {children}
      {valid && <div style={{ color: "red", fontSize: "14px", margin:"8px 4px"}}>중복된 닉네임입니다.</div>}
    </div>
  );
};

export default Label;
