import React from "react";

const docs = [
  { name: "Project Proposal.pdf", sharedBy: "Admin" },
  { name: "UI Design.fig", sharedBy: "Design Team" },
  { name: "API Docs.docx", sharedBy: "Backend Team" },
];

const SharedDocs = () => {
  return (
    <div className="task-table">
      {docs.map((doc, index) => (
        <div key={index} className="task-row">
          <div className="task-name">{doc.name}</div>
          <div>Shared By</div>
          <div className="task-date">{doc.sharedBy}</div>
        </div>
      ))}
    </div>
  );
};

export default SharedDocs;
