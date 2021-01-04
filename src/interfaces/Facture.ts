export interface FactureInterfaces {

    utilisateur_id_utilisateur: number | null | undefined;
    id_facture: number;
    date_facture: string;
    montant_ht: string;
    montant_ttc: string;
    source: string;
    creation: string;
    modification: string;
    save(): Promise < number >
}