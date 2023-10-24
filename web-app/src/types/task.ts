import { Periode } from './shared';

export interface TaskType {
  id: string,
  name: string,
  notes?: string,
}

export interface Task {
  id: string,
  periode: Periode
  notes?: string
  status: string
  taskType: TaskType
}
