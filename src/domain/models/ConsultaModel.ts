export interface ConsultaModel {
    id:           number;
    consult_date: Date;
    reason:       string;
    antecedents:  string;
    diseases:     string;
    next_consult: Date;
    status:       number;
    patient:      number;
}
