import Tuteur from "./Tuteur";
import Enfant from "./Enfant";

export default class Creer {

    private id_tuteur: Tuteur;
    private id_enfant: Enfant;

    constructor(id_tuteur: Tuteur, id_enfant: Enfant) {
        this.id_tuteur = id_tuteur;
        this.id_enfant = id_enfant;
    }
}