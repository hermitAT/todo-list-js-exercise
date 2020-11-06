// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,

    logState: (task) => {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: (task) => {
      task.complete = true;
    },
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(task1);
task1.markCompleted(task1);
task1.logState(task1);

