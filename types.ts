import Stripe from "stripe";

export interface UserDetails {
  id: string;
  full_name: string;
  avatar_url?: string;
  // email: string;
}

export interface Opportunity {
  id: string;
  user_id: string;
  approved: boolean;
  description: string;
//   embedding: string;
  industry: string;
  isfor: string;
  provider: string;
  season: string;
  title: string;
  type: string;
  mode: string;
  typelabel: string;
  location: string;
}

export interface OppImage {
  id: string;
  user_id: string;
  provider: string;
  title: string;
  image_path: string;
};