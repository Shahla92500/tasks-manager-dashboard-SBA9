import type{ Task, TaskItemProps, TaskListProps } from "../../types/index";
import TaskItem from "./TaskItem";
// const initialTasks : Task[] = [
//    {id: "1", title:"Design landing page", description:"Create the initial wireframe and mockups.", status:"Pending", priority:"high", dueDate: "2025-06-20",},
//    {id: "2",title:"Set up CI/CD pipeline", description: "Configure GitHub Actions for automation.",  status:"Pending", priority: "medium", dueDate: "2025-06-18",},
//     {id: "3", title: "Fix login bug",   description: "Resolve the issue where users can't log in .", status: "InProgress",      priority: "high",      dueDate: "2025-06-14",    },
//     {id: "4",      title: "Write unit tests",  description: "Add coverage for the user service module.", status: "InProgress",      priority: "low",      dueDate: "2025-06-22",    },
//     {id: "5",      title: "Deploy to staging",  description: "Push the latest build to the staging environment for QA.",   status: "Completed",      priority: "medium",      dueDate: "2025-06-10",    },
//   ]


// function TaskList(initialTasks : Task[]) {
function TaskList({tasks}:TaskListProps) {
  
  // const taskItems = initialTasks.map(task => (
  const taskItems = tasks.map(task => (
    <li  key={task.id} style={{ borderBottom: '1px solid #eee', marginBottom: '10px', paddingBottom: '10px' }}  >
      <TaskItem task={task} />
    </li>
  ));

  return (
    <div>
      <h2>Task List</h2>
      <ul 
          style={{ listStyle: 'none', padding: 0 }}>  
          {taskItems}
      </ul>
    </div>
  );
}
export default TaskList;