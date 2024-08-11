import { Department } from "./department.enum";
import { Urgency } from "./urgency.enum";

export interface MessageForm {
  urgency: Urgency;
  department: Department;
  message: string;
}