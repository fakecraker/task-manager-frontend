import axios from "axios";

// Base API URL
const API_URL = "http://localhost:8081/tasks";

// Function to get tasks
export const getTasks = async (token) => {
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
export const addTask = async (task, token) => {
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
export const updateTask = async (taskId, updatedTask, token) => {
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
export const deleteTask = async (taskId, token) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error deleting task", error);
    throw error;
  }
};
