
export type TaskStatus = "Pending" | "InProgress" | "Completed";
export type Priority = "Low" | "Medium" | "High";
export type SortKey = "None" | "Title" | "Due-Date" | "Priority";

//interface for: Task data structure
export interface Task {
  id: string;            // unique key
  title: string;
  description: string;
  status?: TaskStatus;
  priority?: Priority;
  dueDate?: string;            
}

export interface NewTaskInput {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: string
  dueDate?: Date
}
//interface for: Task list props
export interface TaskListProps {
  tasks: Task[];
  onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
  onDelete?: (taskId: string) => void;
}

//interface for: Form data
export interface TaskFormData {
name: string;
priority: string;
status: string;
}

//interface for: Filter list props
export interface FilterBarProps {
  selectedStatus: TaskStatus | "All",
  selectedPriority: Priority | "All",
  onStatusChange: (s: TaskStatus | "All") =>void,
  onPriorityChange: (p: Priority | "All") => void,
}

//interface for: Task Item props
export interface TaskItemProps {
  task: Task;
  onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
  onDelete?: (taskId: string) => void;
}