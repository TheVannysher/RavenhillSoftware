export interface Vine {
  id: string,
  field_id: string,
  block_id: string,
  clusters?: number,
  row: number,
  vineNumber: number,
  variety: Variety,
  vigor?: VineVigor
}

export interface VineInput {
  id: string,
  clusters?: number,
  row: number,
  vineNumber: number,
  variety: Variety,
  vigor?: VineVigor
}

export interface Variety {
  id: string,
  name: string,
}

export enum VineVigor {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  DEAD = 'dead',
}
