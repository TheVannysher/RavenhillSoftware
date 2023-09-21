import { Frequency, Periode } from "./shared";

export interface Cepage {
    id: string,
    name: string,
    notes: string,
    harvestPeriode?: Periode
    maintenanceFrequency: Frequency
}