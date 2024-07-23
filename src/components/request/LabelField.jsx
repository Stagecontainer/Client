const LabelField = ({ children, label }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <span style={{ fontSize: "16px", fontWeight: 500 }}>{label}</span>
      {children}
    </div>
  );
};

export default LabelField;
