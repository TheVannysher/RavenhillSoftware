import { Periode } from './shared';

export interface Variety {
  name: string,
  description?: string,
  harvest?: Periode
}

export interface VarietyInput {
  name?: string,
  description?: string,
  harvest?: Periode
}
