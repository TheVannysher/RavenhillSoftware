import { Timestamp } from 'firebase/firestore';

export interface Field {
  id: string,
  name: string,
  orientation?: FieldOrientation,
  sloap?: number,
  createdAt?: Timestamp,
  updatedAt?: Timestamp,
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
