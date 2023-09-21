export interface Vine {
    id: string
    notes?: string
    row: string
    cepageId: string
    lastMaintenance?: string
}

export interface VineRow {
    rowNumber: string,
    vineList: Vine[]
}