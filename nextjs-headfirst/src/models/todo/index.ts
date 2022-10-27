export enum TodoStatus {
  pending = "pending",
  inprogress = "inprogress",
  done = "done",
}
export interface TodoModel {
  id: number;
  name: string;
  description?: string;
  status: TodoStatus;
}
