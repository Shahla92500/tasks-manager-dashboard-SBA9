
import type { Task } from "../../types";

// const task  interface Task {
//   id: string;            // unique key
//   title: string;
//   description: string;
//   status?: TaskStatus;
//   priority?: Priority;
//   dueDate?: string;            
// }

function SearchTask({id, title,description, status, priority, dueDate} : Task){

  try {
    if (!id) {
    //   const res = await fetch(`${BASE_URL}/v3.1/all?fields=flags,name,population,region,capital,tld,currencies,languages,borders`);
    //   const data = await res.json();
    //   return displayCountries(data);    

    console.log("enter a task.... not exist")
    }
    const searchedTasks = useMemo ( 
     () =>tasks.filter(task => {
        const matchId = idFilter === "All" || id === {id}};
          return matchStatus && matchPriority;
      }),
    [tasks, statusFilter, priorityFilter]
  );
   

    // displayCountry(data);
  } catch (e) {
    console.error(e);
  } 

}

  return (
        <div>
            
            <TaskList tasks={filteredTasks} />
        </div>
   )


 }
export default TaskFilter 