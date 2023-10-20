import { DocumentReference } from '@angular/fire/firestore';
import VigorEnum from 'src/lib/enum/vigor';

export interface Vine {
  id: string
  clusters: number,
  buds: number,
  brix: string,
  collar: boolean,
  vigor: VigorEnum,
  row: string,
  lastMaintenance?: string
  varietyRef: DocumentReference
}

export interface VineRow {
  rowNumber: string,
  vineList: Vine[]
}
