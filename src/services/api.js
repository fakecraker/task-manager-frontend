import axios from "axios";
import keycloak from "../keycloak"; 

const API_URL = "http://localhost:8081/tasks";


const getAuthToken = async () => {
  if (!keycloak.token) return null;
  
  try {
    await keycloak.updateToken(30); 
    return keycloak.token;
  } catch (error) {
    console.error("Token refresh failed", error);
    return null;
  }
};

// API requests
export const getTasks = async () => {
  const token = await getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks", error);
    throw error;
  }
};


// Function to add a new task
export const addTask = async (task) => {
  const token = await getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await axios.post(API_URL, task, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding task", error);
    throw error;
  }
};

// Function to update a task
export const updateTask = async (taskId, updatedTask) => {
  const token = await getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    const response = await axios.put(`${API_URL}/${taskId}`, updatedTask, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating task", error);
    throw error;
  }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
  const token = await getAuthToken();
  if (!token) throw new Error("User not authenticated");

  try {
    await axios.delete(`${API_URL}/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error deleting task", error);
    throw error;
  }
};
