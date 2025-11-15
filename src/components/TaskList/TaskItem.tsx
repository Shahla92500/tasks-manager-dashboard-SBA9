
// import { type Task } from "../../types";
import {type TaskItemProps } from "../../types";

// interface Item {
//   id: number; // Unique ID from data
//   title: string;
//   description: string;
// }



function TaskItem({task}: TaskItemProps) {

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
    </div>
  );
}
export default TaskItem;