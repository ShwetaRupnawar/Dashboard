import React from "react";

const tasks = [
  { name: "Design UI", date: "2026-02-20", status: "completed" },
  { name: "API Integration", date: "2026-02-25", status: "in-progress" },
  { name: "Testing", date: "2026-02-28", status: "overdue" },
];

const TaskList = () => {
  return (
    <div className="task-table">
      {tasks.map((task, index) => (
        <div key={index} className="task-row">
          <div className="task-name">{task.name}</div>
          <div className={`status-badge ${task.status}`}>
            {task.status}
          </div>
          <div className="task-date">{task.date}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;