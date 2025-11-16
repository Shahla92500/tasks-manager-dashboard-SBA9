

import type { TaskItemProps } from "../../types/index";

import type {Task, TaskStatus} from "../../types/index"

// export interface TaskItemProps {
//   task: Task;
//   onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete?: (taskId: string) => void;
// }

const statusClass: Record<TaskStatus, string> = {
  'Pending': 'pill pill-yellow',
  'InProgress': 'pill pill-blue',
  'Completed': 'pill pill-green'
};
const priorityClass = { Low: 'low', Medium: 'medium', High: 'high' };

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <section className="task-card">
      <div className="task-head">
        <div>
          <h3 className="task-title">{task.title}</h3>
          {/* <p className="task-desc">{task.description}</p> */}
        </div>
        <div className="task-head-right">
          {task.status && (
            <span className={statusClass[task.status]}>
              {task.status}
            </span>
          )}
          <button className="delete-btn"  onClick={() => onDelete && onDelete(task.id)}>
            Delete
          </button>
        </div>
      </div>

      {/* description */}
      <p className="task-desc">{task.description}</p>

      {/* bottom row: priority + due date */}
      <div className="task-meta">
        {task.priority && (
          <span
            className={`priority-label ${priorityClass[task.priority]}`}
          >
            Priority: {task.priority}
          </span>
        )}

        <span className="task-due">
          Due:{" "}
          {task.dueDate &&
            new Date(task.dueDate).toLocaleDateString()}
        </span>
        {/* <select
          className="sort-select"
          value={task.status}
          onChange={e =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
        >
          <option value="pending">Title</option>
          <option value="in-progress">Due Date</option>
          <option value="completed">Priority</option>
        </select> */}
      </div>
    </section>
  );
}
export default TaskItem;