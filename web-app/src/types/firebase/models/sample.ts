export type Sample = SampleMesurements & {
    id: string,
    vine_id: string,
    postition: {
        row: number,
        vine: number,
    },
};

export interface SampleMesurements {
    brix: number,
    ph: number,
    ta: number,
    cluster_quantity: number,
}