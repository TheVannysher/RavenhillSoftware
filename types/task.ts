export interface Task {
    id: string,
    title: string,
    startDate: Date,
    endDate: Date,
    user_id?: string,
    notes?: string, 
}
