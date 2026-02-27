import React from "react";

const assignedTasks = [
  { task: "Fix Login Bug", assignedBy: "Rahul", due: "26 Feb" },
  { task: "Update Dashboard", assignedBy: "Manager", due: "28 Feb" },
  { task: "Database Review", assignedBy: "Team Lead", due: "2 Mar" },
];

const AssignedTasks = () => {
  return (
    <div className="task-table">
      {assignedTasks.map((item, index) => (
        <div key={index} className="task-row">
          <div className="task-name">{item.task}</div>
          <div>{item.assignedBy}</div>
          <div className="task-date">{item.due}</div>
        </div>
      ))}
    </div>
  );
};

export default AssignedTask;