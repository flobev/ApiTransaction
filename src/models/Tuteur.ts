import Utilisateur from "./Utilisateur";

export default class Tuteur extends Utilisateur {

    id_tuteur: number | null;
    utilisateur_id_utilisateur: number | null | undefined;

    protected table: string = 'tuteur';

    constructor(id_tuteur: number | null, id: Utilisateur){
        super(id);
        this.id_tuteur = id_tuteur;
        this.utilisateur_id_utilisateur = this.id;
    }

    get attributInsert(): Array < string > {
        return ['utilisateur_id_utilisateur']
    };
}