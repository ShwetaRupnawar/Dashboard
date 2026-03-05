import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Dashboard = () => {
  const COLS = 12;

  const [widgets, setWidgets] = useState([
    { i: "1", x: 0, y: 0, w: 4, h: 2 },
    { i: "2", x: 4, y: 0, w: 4, h: 2 },
    { i: "3", x: 8, y: 0, w: 4, h: 2 },
  ]);

  const widgetNames = ["Widget 1", "Widget 2", "Widget 2"];

  // --------------------
  // Find first horizontal space for new widget
  // --------------------
  const getNextPosition = (widgets, widgetWidth) => {
    const grid = Array.from({ length: 100 }, () => Array(COLS).fill(false));

    // mark occupied cells
    widgets.forEach(({ x, y, w, h }) => {
      for (let dy = 0; dy < h; dy++) {
        for (let dx = 0; dx < w; dx++) {
          grid[y + dy][x + dx] = true;
        }
      }
    });

    // find first available position
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x <= COLS - widgetWidth; x++) {
        let fits = true;
        for (let dx = 0; dx < widgetWidth; dx++) {
          if (grid[y][x + dx]) {
            fits = false;
            break;
          }
        }
        if (fits) return { x, y };
      }
    }

    // fallback to bottom
    return { x: 0, y: widgets.length > 0 ? Math.max(...widgets.map(w => w.y + w.h)) : 0 };
  };

  const addWidget = () => {
    const newId = (widgets.length + 1).toString();
    const w = 4;
    const h = 2;
    const { x, y } = getNextPosition(widgets, w);

    setWidgets(prev => [...prev, { i: newId, x, y, w, h }]);
  };

  const removeWidget = (id) => {
    setWidgets(prev => prev.filter(w => w.i !== id));
  };

  const onLayoutChange = (layout) => {
    setWidgets(layout.map(({ i, x, y, w, h }) => ({ i, x, y, w, h })));
  };

  const getWidgetName = (i) => {
    const index = parseInt(i, 10) - 1;
    if (index < widgetNames.length) return widgetNames[index];
    return `Widget ${i}`;
  };

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={addWidget}
        style={{ marginBottom: 20, padding: "10px 20px", fontSize: 16 }}
      >
        Add Widget
      </button>

      <GridLayout
        layout={widgets}
        cols={COLS}
        rowHeight={120}
        width={1200}
        onLayoutChange={onLayoutChange}
        compactType="vertical"
        preventCollision={false}
        isResizable={true}
        isDraggable={true}
      >
        {widgets.map((w) => (
          <div
            key={w.i}
            style={{
              background: "#f4f4f4",
              color: "#111",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: 16,
              boxSizing: "border-box",
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <span>{getWidgetName(w.i)}</span>
              <button
                onClick={() => removeWidget(w.i)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "red",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <div></div>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Dashboard;