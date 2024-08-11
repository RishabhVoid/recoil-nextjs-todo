export type priorityTypes = "low" | "mid" | "high";

export interface Todo {
  text: string;
  priority: priorityTypes;
  done: boolean;
}
