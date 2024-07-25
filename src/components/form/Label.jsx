const Label = ({ children, label }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", lineheight: "140%" }}>
        <span style={{ fontSize: "16px", fontWeight: 500 }}>{label}</span>
        {children}
      </div>
    );
  };
  
  export default Label;
  