import { useMemo } from "react";
import type { Task, Priority, TaskStatus } from '../../types'
import TaskList from "../TaskList/TaskList";

interface TaskFilterProps {
  tasks: Task[];
  statusFilter: TaskStatus | "All";
  priorityFilter: Priority | "All";
  searchTask: string;
}

// interface TaskFilterProps {
//   tasks: Task[];
//   onTaskStatusChange: (id: string, newStatus: TaskStatus) => void;
//   onTaskDelete: (id: string) => void;
// }

 function TaskFilter({tasks, statusFilter, priorityFilter, searchTask,}: TaskFilterProps){

//   const [statusFilter, setStatusFilter] = useState<TaskStatus | 'All'>('All');
//   const [priorityFilter, setPriorityFilter] = useState<Priority |'All'>('All')

  const filteredTasks = useMemo ( 
     () =>tasks.filter(task => {
        const matchStatus = statusFilter === "All" || task.status === statusFilter;

        const matchPriority = priorityFilter === "All" || task.priority === priorityFilter;

        const item = searchTask.trim().toLowerCase();
        const matchSearch = item === "" ||
        task.id.toLowerCase().includes(item) ||
        task.title.toLowerCase().includes(item) ||
        task.description.toLowerCase().includes(item) ||
        task.status?.toLowerCase().includes(item) ||
        task.priority?.toLowerCase().includes(item);

        return matchStatus && matchPriority && matchSearch;
        
      }),
    [tasks, statusFilter, priorityFilter, searchTask]
  );
  return (
        <div>
            <TaskList tasks={filteredTasks} />
        </div>
   )


 }
export default TaskFilter 
    
    
    