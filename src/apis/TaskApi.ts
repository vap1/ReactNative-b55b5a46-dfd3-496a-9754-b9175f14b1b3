
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Task {
  // Define the fields for the Task object here
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export interface TaskApi {
  getTasks(): Promise<Task[]>;
  createTask(task: Task): Promise<UserRegistrationResponse>;
  updateTask(task: Task): Promise<UserRegistrationResponse>;
  deleteTask(taskId: string): Promise<UserRegistrationResponse>;
}

export const taskApi: TaskApi = {
  getTasks: async () => {
    try {
      const response = await axios.get<Task[]>(`${BASE_URL}/tasks`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch tasks');
    }
  },

  createTask: async (task: Task) => {
    try {
      const response = await axios.post<UserRegistrationResponse>(
        `${BASE_URL}/tasks`,
        task
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to create task');
    }
  },

  updateTask: async (task: Task) => {
    try {
      const response = await axios.put<UserRegistrationResponse>(
        `${BASE_URL}/tasks/${task.id}`,
        task
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to update task');
    }
  },

  deleteTask: async (taskId: string) => {
    try {
      const response = await axios.delete<UserRegistrationResponse>(
        `${BASE_URL}/tasks/${taskId}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete task');
    }
  },
};