import Utilisateur from "./Utilisateur";

export default class Enfant extends Utilisateur {

    id_enfant: number | null;
    utilisateur_id_utilisateur: number | null | undefined;

    protected table: string = 'enfant';

    constructor(id_enfant: number | null, id: Utilisateur){
        super(id);
        this.id_enfant = id_enfant;
        this.utilisateur_id_utilisateur = this.id;
    }

    get attributInsert(): Array < string > {
        return ['utilisateur_id_utilisateur']
    };
}