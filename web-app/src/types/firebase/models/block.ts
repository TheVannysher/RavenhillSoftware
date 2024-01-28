export interface Block {
  id: string,
  name: string,
  average: BlockStats,
  samples?: SampleData[]
}

export interface BlockStats {
  ta: number,
  ph: number,
  brix: number,
}

export type SampleData = BlockStats & {
  id: string,
  vine_id: string,
  postition: {
    row: number,
    vine: number,
  },
};
