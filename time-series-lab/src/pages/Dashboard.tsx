import Chart from "../components/Chart";

export default function Dashboard() {
  return (
    <div>
      <h1>Interest Rate Dashboard</h1>
      <p>Bank of England interest and ONS inflation rate data.</p>
      <Chart title="Interest Rates Over Time" />
    </div>
  );
}
