

import type { TaskItemProps } from "../../types/index";

import type {Task, TaskStatus} from "../../types/index"

// export interface TaskItemProps {
//   task: Task;
//   onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete?: (taskId: string) => void;
// }

const statusClass: Record<TaskStatus, string> = {
  'Pending': 'pill yellow',
  'InProgress': 'pill blue',
  'Completed': 'pill green'
};
const priorityClass = { low: 'low', medium: 'medium', high: 'high' };

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <section className="task-card">
      <div className="task-head">
        <div>
          <h3 className="task-title">{task.title}</h3>
          <p className="task-desc">{task.description}</p>
        </div>

        <div className="task-head-right">
          <span className={statusClass[task.status]}>
            {task.status}
          </span>

          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </div>

      <div className="task-meta">
        <span className={`priority-label ${priorityClass[task.priority]}`}>
          Priority: {task.priority}
        </span>

        <span className="due-label">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>

        {/* <select
          className="status-select"
          value={task.status}
          onChange={e =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select> */}
      </div>
    </section>
  );
}
export default TaskItem;