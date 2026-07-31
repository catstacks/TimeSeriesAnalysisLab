interface ChartProps {
  title: string;
}

export default function Chart({ title }: ChartProps) {
  return (
    <div
      style={{
        border: "2px dashed #ccc",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "8px",
        color: "#999",
      }}
    >
      <strong>{title}</strong>
      <p>Chart coming soon</p>
    </div>
  );
}
