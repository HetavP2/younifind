export interface UserDetails {
  id: string;
  full_name: string;
  avatar_url?: string;
}

export interface Opportunity {
  id: string;
  user_id: string;
  approved: boolean;
  description: string;
  embedding?: Array<any>;
  industry: string;
  isfor: string;
  provider: string;
  season: string;
  title: string;
  type: string;
  mode: string;
  typelabel: string;
  location: string;
  expiry_date: any;
  created_at?: string;
  admin_notes?: string;
  contact_email: string;
}

export interface OpportunityImages {
  id?: string;
  opportunity_id: number;
  file_path: string;
  file_name: string;
  created_at?: string;
  user_id: string;
}


export interface Admins {
  id?: string;
  admin_id: string;
  email: string;
  created_at?: string;
}

export interface OpportunityStatuses {
  opportunity_id: number;
  user_id?: string;
  approved?: boolean;
  created_at?: string;
}