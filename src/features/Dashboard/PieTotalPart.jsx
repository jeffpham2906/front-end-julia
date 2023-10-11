import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const data = [
  { name: "Đã xong", value: 9 },
  { name: "Chưa hoàn thành", value: 10 },
];
function PieTotalPart() {
  return (
    <div className="rounded-md border bg-white p-8">
      <h1>Total</h1>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={2}
          >
            <Cell fill="#115e59"></Cell>
            <Cell fill="#0d9488"></Cell>
          </Pie>
          <Tooltip></Tooltip>
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          ></Legend>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieTotalPart;
