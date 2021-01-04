export interface MusiquesInterfaces {

    utilisateur_id_utilisateur: number | null | undefined;
    id_musiques: number;
    nom: string;
    lien: string;
    couverture: string;
    temps: string;
    creation: string;
    modification: string;
    type: string;
    save(): Promise < number >
}