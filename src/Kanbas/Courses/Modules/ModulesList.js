import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ModuleListData } from "./ModuleTableData";

function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState(ModuleListData);
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
