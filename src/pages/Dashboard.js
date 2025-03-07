import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { getTasks, addTask, updateTask, deleteTask } from "../services/api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const { token, user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on page load
  useEffect(() => {
    if (token) {
      getTasks(token)
        .then(setTasks)
        .catch((err) => console.error(err));
    }
  }, [token]);

  // Function to handle adding a task
  const handleAddTask = async (task) => {
    const newTask = await addTask(task, token);
    setTasks([...tasks, newTask]);
  };

  // Function to handle updating a task
  const handleUpdateTask = async (taskId, updatedTask) => {
    const updated = await updateTask(taskId, updatedTask, token);
    setTasks(tasks.map((task) => (task.id === taskId ? updated : task)));
  };

  // Function to handle deleting a task
  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId, token);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Dashboard;
