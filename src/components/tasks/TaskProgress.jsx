import React from "react";

const progressData = [
  { name: "Design UI", progress: 100, priority: "High" },
  { name: "API Integration", progress: 60, priority: "Medium" },
  { name: "Testing", progress: 30, priority: "High" },
];

const TaskProgress = () => {
  return (
    <div className="progress-table">
      <div className="progress-header">
        <div>Task</div>
        <div>Progress</div>
        <div>Priority</div>
      </div>

      {progressData.map((task, index) => (
        <div key={index} className="progress-row">
          <div>{task.name}</div>

          <div className="progress-wrapper">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
            <span>{task.progress}%</span>
          </div>

          <div className={`priority ${task.priority}`}>
            {task.priority}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskProgress;