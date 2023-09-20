export interface Vine {
    id: string
    notes?: string
    row: string
    sepageId: string
    lastMaintenance?: string
}

export interface VineRow {
    rowNumber: string,
    vineList: Vine[]
}