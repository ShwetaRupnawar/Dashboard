import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ===== TASK DATA ===== */
const data = [
  { name: "Completed", value: 8, color: "#22c55e" },
  { name: "In Progress", value: 4, color: "#f59e0b" },
  { name: "Overdue", value: 2, color: "#ef4444" },
];

const TaskPieChart = () => {

  const totalTasks = data.reduce(
    (sum, task) => sum + task.value,
    0
  );

  return (
    <div className="card pie-card">

      {/* HEADER */}
      <div className="pie-header">
        <h2>Task Status</h2>
        <p></p>
      </div>

      {/* PIE CHART */}
      <div className="chart-container">

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={105}
              paddingAngle={4}
              dataKey="value"
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* ✅ CENTER TEXT INSIDE PIE */}
        <div className="chart-center">
          <p className="total-label">Total Tasks</p>
          <h2 className="total-number">{totalTasks}</h2>
        </div>

      </div>

      {/* LEGEND */}
      <div className="chart-legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ background: item.color }}
            ></span>
            {item.name} ({item.value})
          </div>
        ))}
      </div>

    </div>
  );
};

export default TaskPieChart;