export interface RecetaModel{
    id:           number;
    description:  string;
    indicaciones: string;
    created_at:   Date;
    status:       number;
    patient:      number;
}
