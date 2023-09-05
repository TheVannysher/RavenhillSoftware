export interface Vine {
    id: string,
    cepage: string,
}

export interface Row {
    id: string
    vines: Vine[]
}