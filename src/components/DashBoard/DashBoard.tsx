import type { TaskStatus, Priority, SortKey, Task } from "../../types";
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
  onAddTask: (task: Task) => void;
}

export function DashBoard({
  selectedStatus, onStatusChange,
  selectedPriority, onPriorityChange,
  searchTask,  onSearchChange,
  sortBy,  onSortChange,
  onAddTask,
}: DashBoardProps) {

  // --- form local state ---
  const [taskId, setTaskId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [status, setStatus] = useState<TaskStatus>("Pending");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskId.trim() || !title.trim()) return; // simple validation

    const newTask: Task = {
        id: taskId.trim(),
        title: title.trim(),
        description: description.trim(),
        priority,
        status,   
        dueDate 
    };
    onAddTask(newTask);

    // clear fields
    setTaskId("");
    setTitle("");
    setDescription("");
    setPriority("Medium");
  };
  return (
    <div className="dashboard">
      {/* === Top filters row === */}
      <div className="dashboard-top">
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

        {/* Status filter */}
        <div className="filter-block">
          <div className="filter-label">Status</div>
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


      {/* adding new task in a form */}
      <div className="dashboard-middle">
        {/* Left: simple form */}
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="form-title">Add a new task</div>
          <div> <label> Task Id: <input type="text"
                    value={taskId}
                    onChange={e => setTaskId(e.target.value)}/> 
                </label>  
                <label> Title: <input type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/> 
                </label>
                <label> Description: <input type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/> 
                </label>
                <label> Priority: <select
                    value={priority}
                    onChange={e => setPriority(e.target.value as Priority)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </label>
                <label> Status: <select
                    value={status}
                    onChange={e => setStatus(e.target.value as TaskStatus)}
                >
                    <option value="Pending">High</option>
                    <option value="InProgress">Medium</option>
                    <option value="Completed">Low</option>
                  </select>
                </label>
                <label> Due Date: <input type="text" 
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}/> 
                </label>   
            </div>                          
                <button type="submit" className="add-task-btn">Add a new task</button>
          {/* </div> */}
        </form>


      </div>
    </div>
  );
}

export default DashBoard;
