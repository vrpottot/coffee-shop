export interface Task {
  id: string;
  title: string;
  time?: string;
  priority: 'low' | 'medium' | 'high';
  repeat: 'none' | 'daily' | 'weekly';
  description?: string;
  completed: boolean;
  startDate: string;
}

export interface Tasks {
  [dateKey: string]: Task[];
}

export type Theme = 'dark' | 'light';

export interface TaskFormData {
  title: string;
  time?: string;
  priority: 'low' | 'medium' | 'high';
  repeat: 'none' | 'daily' | 'weekly';
  description?: string;
}
