
interface Opportunity {
  id: number;
  name: string;
  status: string;
  assignedTo: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface OpportunityDetails {
  opportunity: Opportunity;
  tasks: Task[];
}

interface Task {
  id: number;
  name: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateOpportunityRequest {
  name: string;
  assignedTo: string;
  description: string;
}

interface CreateOpportunityResponse {
  success: boolean;
  errorMessage?: string;
}

interface UpdateOpportunityRequest {
  id: number;
  name?: string;
  status?: string;
  assignedTo?: string;
  description?: string;
}

interface UpdateOpportunityResponse {
  success: boolean;
  errorMessage?: string;
}

interface GetOpportunitiesResponse {
  opportunities: Opportunity[];
}

export type {
  Opportunity,
  OpportunityDetails,
  Task,
  CreateOpportunityRequest,
  CreateOpportunityResponse,
  UpdateOpportunityRequest,
  UpdateOpportunityResponse,
  GetOpportunitiesResponse,
};