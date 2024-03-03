import { SampleMesurements } from "./sample";

export interface Block {
  id: string,
  name: string,
  average: SampleMesurements,
  vine_quantity: number,
  sample_quantity: number,
}