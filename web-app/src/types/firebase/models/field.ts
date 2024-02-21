import { Timestamp } from 'firebase/firestore';

export interface Field {
  id: string,
  name: string,
  createdAt?: Timestamp,
  updatedAt?: Timestamp,
  layout: FieldLayout,
}

export interface FieldLayout {
  orientation?: FieldOrientation,
  totalRows: number,
  totalVines: number,
  sloap?: number,
  vineSpacing?: number,
  rowSpacing?: number,
  vinesByRow: {
    [key: number]: number,
  },
}

export enum FieldOrientation {
  NORTH = 'N',
  NORTH_EAST = 'NE',
  EAST = 'E',
  SOUTH_EAST = 'SE',
  SOUTH = 'S',
  SOUTH_WEST = 'SW',
  WEST = 'W',
  NORTH_WEST = 'NW',
}
