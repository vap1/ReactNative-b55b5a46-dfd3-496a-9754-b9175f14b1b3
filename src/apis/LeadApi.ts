
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Lead {
  id: number;
  name: string;
  contact: string;
  status: string;
  // Add other lead properties here
}

export interface LeadCreateRequest {
  name: string;
  contact: string;
  // Add other required lead properties here
}

export interface LeadUpdateRequest {
  id: number;
  name?: string;
  contact?: string;
  status?: string;
  // Add other optional lead properties here
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errorMessage?: string;
}

export async function createLead(lead: LeadCreateRequest): Promise<ApiResponse<Lead>> {
  try {
    const response = await axios.post<ApiResponse<Lead>>(`${BASE_URL}/leads`, lead);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}

export async function getLeads(): Promise<ApiResponse<Lead[]>> {
  try {
    const response = await axios.get<ApiResponse<Lead[]>>(`${BASE_URL}/leads`);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}

export async function updateLead(lead: LeadUpdateRequest): Promise<ApiResponse<Lead>> {
  try {
    const response = await axios.put<ApiResponse<Lead>>(`${BASE_URL}/leads/${lead.id}`, lead);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}

export async function deleteLead(leadId: number): Promise<ApiResponse<void>> {
  try {
    const response = await axios.delete<ApiResponse<void>>(`${BASE_URL}/leads/${leadId}`);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}