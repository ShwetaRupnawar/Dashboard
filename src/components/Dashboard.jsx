import React, { useEffect, useRef } from "react";
import { GridStack } from "gridstack";

import TaskPieChart from "./tasks/TaskPieChart";
import TaskCalendar from "./calendar/TaskCalendar";
import TaskList from "./tasks/TaskList";
import TaskProgress from "./tasks/TaskProgress";

import "gridstack/dist/gridstack.min.css";
import "../styles/dashboard.css";

const Dashboard = () => {
  const gridRef = useRef(null);
  const grid = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    if (grid.current) {
      grid.current.destroy(false);
    }

    grid.current = GridStack.init(
      {
        column: 12,
        cellHeight: 80,
        margin: 20,
        animate: true,
        float: false,
        compact: false,
        handle: ".drag-handle",
        resizable: { handles: "all" },
        disableOneColumnMode: true,
      },
      gridRef.current
    );

    return () => {
      if (grid.current) {
        grid.current.destroy(false);
        grid.current = null;
      }
    };
  }, []);

  // ================= ADD WIDGET =================
  const addWidget = () => {
    if (!grid.current) return;

    const widgetId = `widget-${Date.now()}`;

    const widget = document.createElement("div");
    widget.className = "grid-stack-item";
    widget.setAttribute("gs-w", "6");
    widget.setAttribute("gs-h", "8");
    widget.setAttribute("gs-id", widgetId);

    widget.innerHTML = `
      <div class="grid-stack-item-content card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2 class="card-title drag-handle">New Widget</h2>
          <button class="delete-btn" data-id="${widgetId}">✕</button>
        </div>
        <div style="flex:1; display:flex; justify-content:center; align-items:center;">
          <p>Dynamic Widget Content</p>
        </div>
      </div>
    `;

    grid.current.addWidget(widget);

    // Attach delete event
    widget.querySelector(".delete-btn").addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      deleteWidget(id);
    });
  };

  // ================= DELETE WIDGET =================
  const deleteWidget = (id) => {
    if (!grid.current) return;

    const el = gridRef.current.querySelector(`[gs-id="${id}"]`);
    if (el) {
      grid.current.removeWidget(el);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>

        <button className="add-widget-btn" onClick={addWidget}>
          + Add Widget
        </button>
      </div>

      <div className="grid-stack" ref={gridRef}>
        {/* PIE */}
        <div className="grid-stack-item" gs-w="6" gs-h="8">
          <div className="grid-stack-item-content card">
            <h2 className="card-title drag-handle">Task Overview</h2>
            <TaskPieChart />
          </div>
        </div>

        {/* CALENDAR */}
        <div className="grid-stack-item" gs-w="6" gs-h="8">
          <div className="grid-stack-item-content card">
            <h2 className="card-title drag-handle">Calendar</h2>
            <TaskCalendar />
          </div>
        </div>

        {/* TASK LIST */}
        <div className="grid-stack-item" gs-w="6" gs-h="8">
          <div className="grid-stack-item-content card">
            <h2 className="card-title drag-handle">Task List</h2>
            <TaskList />
          </div>
        </div>

        {/* TASK PROGRESS */}
        <div className="grid-stack-item" gs-w="6" gs-h="8">
          <div className="grid-stack-item-content card">
            <h2 className="card-title drag-handle">Task Progress</h2>
            <TaskProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;