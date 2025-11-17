import type { Task, Priority, SortKey } from "../types/index";

const priorityOrder: Record<Priority, number> = {
  High: 1,
  Medium: 2,
  Low: 3,
};


export function sortTasks(tasks: Task[], sortBy: SortKey): Task[] {
  const copy = [...tasks]; // never mutate original

  return copy.sort((a, b) => {
    switch (sortBy) {
      case "Title":
        console.log(a.title.localeCompare(b.title))
        return a.title.localeCompare(b.title);

      case "Due-Date": {
        const da = a.dueDate ? new Date(a.dueDate).getTime() : 0;
        const db = b.dueDate ? new Date(b.dueDate).getTime() : 0;
        console.log(da-db)
        return da - db; // earliest first
      }

      case "Priority": {
        const pa = a.priority ? priorityOrder[a.priority] : 999;
        const pb = b.priority ? priorityOrder[b.priority] : 999;
        console.log(pa - pb)
        return pa - pb; // High → Medium → Low
      }

      case "None":
        
      default: console.log(0)
        return 0; // no change
    }
  });
}