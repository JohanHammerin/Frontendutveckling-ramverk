export interface Project {
  title: string;
  goals: Goal[];
}

export interface Goal {
  name: string;
  isComplete: boolean;
}
