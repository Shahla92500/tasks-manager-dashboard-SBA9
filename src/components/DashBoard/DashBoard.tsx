import type { TaskStatus, Priority, SortKey, NewTaskInput } from "../../types";
import { useState } from "react";

interface DashBoardProps {
  selectedStatus: TaskStatus | "All";
  selectedPriority: Priority | "All";
  onStatusChange: (s: TaskStatus | "All") => void;
  onPriorityChange: (p: Priority | "All") => void;
  searchTask: string;
  onSearchChange: (value: string) => void;
  sortBy: SortKey;
  onSortChange: (value: SortKey) => void;
//   onAddTask: (task: NewTaskInput) => void;
}

export function DashBoard({
  selectedStatus,
  selectedPriority,
  onStatusChange,
  onPriorityChange,
  searchTask,
  onSearchChange,
  sortBy,
  onSortChange,
//   onAddTask,
}: DashBoardProps) {

  // --- form local state ---
  const [taskId, setTaskId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!taskId.trim() || !title.trim()) return; // simple validation

//     onAddTask({
//       id: taskId.trim(),
//       title: title.trim(),
//       description: description.trim(),
//       priority
//     });

//     // clear fields
//     setTaskId("");
//     setTitle("");
//     setDescription("");
//     setPriority("Medium");
//   };
  return (
    <div className="dashboard">
      {/* === Top filters row === */}
      <div className="dashboard-top">
        {/* Status filter */}
        {/* //====add sort */}
        <div className="filter-block">
          <div className="filter-label">Sort by</div>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
          >
            <option value="None">None</option>
            <option value="Title">Title</option>
            <option value="Due-Date">Due date</option>
            <option value="Priority">Priority</option>
          </select>
        </div>

        {/* end of add sort */}
        <div className="filter-block">
          <div className="filter-label">Status</div>
          {/* <span className="filter-label">Status --</span> */}
          <select
            value={selectedStatus}
            onChange={(e) =>
              onStatusChange(e.target.value as TaskStatus | "All")
            }
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="InProgress">InProgress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Priority filter */}
        <div className="filter-block">
          <div className="filter-label">Status</div>
          {/* <span className="filter-label">Priority --</span> */}
          <select
            value={selectedPriority}
            onChange={(e) =>
              onPriorityChange(e.target.value as Priority | "All")
            }
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        {/* Search task */}
        <div className="filter-block">
          <div className="filter-label">Search task</div>
          <input
            type="text"
            placeholder="Search by id, title, ......"
            value={searchTask}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      {/* Right: default priority/status info */}
      {/* === Middle form row === */}
      <div className="dashboard-middle">
        {/* Left: simple form */}
        <div className="form-box">
          <div className="form-title">Add a new task</div>
          <div>
            <label>
              Task Id: <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Title: <input type="text" />
            </label>
            <label>
              Description: <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Priority: <input type="text" />
            </label>{" "}
          </div>
        </div>

        {/* Right: default priority/status info */}
        <div className="defaults-box">
          <div>priority = Low</div>
          <div>status = Pending</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
