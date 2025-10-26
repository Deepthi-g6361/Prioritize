import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";

export default function App() {
  return (
    <div>
      <h1>prioritize</h1>
      <p>Where priority turns into progress</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

