
import type { TaskStatus, Priority } from "../../types";

interface DashBoardProps {
  selectedStatus: TaskStatus | "All";
  selectedPriority: Priority | "All";
  onStatusChange: (s: TaskStatus | "All") => void;
  onPriorityChange: (p: Priority | "All") => void;
  searchTask: string;
  onSearchChange: (value: string) =>void;
}
export function DashBoard({
  selectedStatus,
  selectedPriority,
  onStatusChange,
  onPriorityChange,
  searchTask,
  onSearchChange
}: DashBoardProps) {
  return (
    <div className="dashboard">
      {/* === Top filters row === */}
      <div className="dashboard-top">
        {/* Status filter */}
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
            onChange={e => onSearchChange(e.target.value)}
            />
        </div>
      </div>
        {/* Right: default priority/status info */}
              {/* === Middle form row === */}
      <div className="dashboard-middle">
        {/* Left: simple form */}
        <div className="form-box">
          <div className="form-title">Form</div>
          <div>
            <label>
              Task Id: <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Title: <input type="text" />
            </label>
          </div>
        </div>

        {/* Right: default priority/status info */}
        <div className="defaults-box">
          <div>priority = [default]</div>
          <div>status = [default]</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
