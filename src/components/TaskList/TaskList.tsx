import type{ Task, TaskItemProps, TaskListProps } from "../../types/index";
import TaskItem from "./TaskItem";


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