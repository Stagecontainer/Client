const LabelField = ({ children, label, valid = true }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <span
        style={
          !valid
            ? { color: "#FF0004", fontSize: "16px", fontWeight: "500" }
            : { fontSize: "16px", fontWeight: "500" }
        }
      >
        {!valid ? label + "*" : label}
      </span>
      {children}
    </div>
  );
};

export default LabelField;
