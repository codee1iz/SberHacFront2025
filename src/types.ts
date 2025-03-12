export interface Publication {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  date: string;
  journal: string;
  doi: string;
}

export interface SimulationParameters {
  molecularWeight: number;
  temperature: number;
  pressure: number;
  iterations: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  institution: string;
  savedSimulations: string[];
}