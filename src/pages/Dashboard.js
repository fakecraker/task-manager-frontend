import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { getTasks, addTask, updateTask, deleteTask } from "../services/api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";


const DashboardContainer = styled.div`
  background: linear-gradient(to bottom right, #c026d3 0%, #4c1d95 100%);
  min-height: 100vh;
  padding: 20px;
  overflow-x: hidden;
  width: 100%;

  @media (max-width: 576px) {
    padding: 10px;
  }
`;

const WelcomeText = styled.h2`
  color: white;
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem 0;

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin: 1rem 0;
  }
`;

const AddTaskButton = styled.button`
  background: linear-gradient(90deg, #3a1c71, #d76d77);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  display: block;
  margin: 2rem auto;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }

  @media (max-width: 576px) {
    padding: 10px 20px;
    font-size: 1rem;
    margin: 1rem auto;
  }
`;

const TaskTableContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 2rem auto;
  max-width: 1200px;
  overflow-x: auto;

  @media (max-width: 576px) {
    padding: 10px;
    margin: 1rem auto;
    border-radius: 8px;
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
  }
`;

const Dashboard = () => {
  const { token, user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // ... existing useEffect and handler functions remain the same ...
    useEffect(() => {
    if (token) {
      getTasks(token).then(setTasks).catch(console.error);
    }
  }, [token]);

  const handleAddTask = async (task) => {
    const newTask = await addTask(task, token);
    if (!newTask.id) {
      console.error("Task ID is missing, update may fail");
      return;
    }
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (task) => {
    console.log("Updating Task:", task);
    setCurrentTask(task);
    setShowForm(true);
  };

  const handleSaveUpdatedTask = async (updatedTask) => {
    const updated = await updateTask(currentTask.id, updatedTask, token);
    setTasks(tasks.map((task) => (task.id === currentTask.id ? updated : task)));
    setShowForm(false);
    setCurrentTask(null);
  };

  const handleDeleteTask = async (taskId) => {
    console.log("Deleting task with ID:", taskId);
    await deleteTask(taskId, token);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <DashboardContainer>
      <Navbar />
      <WelcomeText>Welcome, {user?.name}</WelcomeText>
      <AddTaskButton onClick={() =>{
        setCurrentTask(null);
        setShowForm(true);
      } }>Add Task!</AddTaskButton>
      {showForm && (
        <TaskForm
          onSubmit={currentTask ? handleSaveUpdatedTask : handleAddTask}
          initialTask={currentTask}
          onClose={() => setShowForm(false)}
        />
      )}
      <TaskTableContainer>
        <h2 style={{ color: '#FFD700', marginBottom: '20px', textAlign:"center"}}>Task<span style={{ color: 'white' }}>table</span></h2>
        <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
      </TaskTableContainer>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;