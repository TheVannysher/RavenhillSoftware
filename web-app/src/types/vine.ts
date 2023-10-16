import { DocumentReference } from '@angular/fire/firestore';
import { Variety } from 'types/variety';
import { Observable } from 'rxjs';
import VigorEnum from "src/lib/enum/vigor"

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