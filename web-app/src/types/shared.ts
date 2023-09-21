import { Timestamp } from "firebase/firestore";

export interface Periode {
    start: Timestamp,
    end: Timestamp,
}

export type Frequency = 'daily' | 'weekly' | 'biweekly' | 'monthly'