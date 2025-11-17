
import './App.css'

import DashBoard from './components/DashBoard/DashBoard'
import TaskFilter from './components/TaskFilter/TaskFilter'
import { sortTasks } from './utils/sortTasks'

import { useState } from 'react'
import type{Task, TaskStatus, Priority, SortKey, NewTaskInput } from './types'


export const initialTasks : Task[] = [
   {id: "1", title:"Design", 
    description:"Create the initial wireframe and mockups.", status:"Pending", priority:"High", dueDate: "2025-06-20",},

   {id: "2",title:"Set up CI/CD pipeline", 
    description: "Configure GitHub Actions for automation.",  status:"Pending", priority: "Medium", dueDate: "2025-06-18",},

   {id: "3", title: "Fix login bug",   
    description: "Resolve the issue where users can't log in .", status: "InProgress",      priority: "High",      dueDate: "2025-06-14",    },

   {id: "4", title: "Write unit tests",  
    description: "Add coverage for the user service module.", status: "InProgress",      priority: "Low",      dueDate: "2025-06-22",    },

   {id: "5", title: "Deploy to staging",  
    description: "Push the latest build to the staging environment for QA.",   status: "Completed",      priority: "Medium",      dueDate: "2025-06-10",    },
]
function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'All'>('All');
  const [priorityFilter, setPriorityFilter] = useState<Priority |'All'>('All')
  const [searchTask, setSearchTask] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortKey>("None");
  // const onDelete= ()=>{};
  // const onStatusChange = () =>{};
  console.log("tasks in Ap", tasks)
// test if sort function works:
    const sorted = sortTasks(initialTasks, "Priority"); 
    console.log("Sorted tasks in Ap", sorted)

  // ===here I passe handlers passed to children ===
  const handleStatusChange = (id: string, next: TaskStatus) =>
    setTasks(prev =>                    // state setter that will change the previous tasks array
            prev.map(t =>              // create a new array by looping over every task (t)
              t.id === id              // if this task's id (t.id) matches the passed id as parameter
              ? { ...t, status: next } // copy all its properties of task in this loop(...t) and change only status to next
              : t                      // otherwise return the original unchanged task (t)
            )
    );

 const handleDelete = (id: string) =>
    setTasks(prev => prev.filter(t => t.id !== id));

 const handleAddTask = (data: NewTaskInput) => {
    setTasks(prev => [
      ...prev,
      {
        id: data.id,
        title: data.title,
        description: data.description,
        priority: data.priority,
        status: "Pending",      // default status
        // dueDate can be added later if you want a field for it
      },
    ]);
  };

  return (
    <div>
      
      <DashBoard
        selectedStatus = {statusFilter} //"All"
        selectedPriority = {priorityFilter}//"All"
        onStatusChange= {setStatusFilter}
        onPriorityChange = {setPriorityFilter}
        searchTask={searchTask}
        onSearchChange={setSearchTask}
        sortBy={sortBy}
        onSortChange={setSortBy}
        // onAddTask={handleAddTask}  
      />
      <TaskFilter
      tasks={tasks}
      statusFilter={statusFilter}
      priorityFilter={priorityFilter}
      searchTask={searchTask}
      sortBy={sortBy}
    />

      {/* <TaskList
        tasks={tasks}
      /> */}
    </div>
  )
}

export default App
