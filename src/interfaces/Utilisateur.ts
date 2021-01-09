export interface UtilisateurInterfaces {

    id_utilisateur ? : number;
    nom ? : string;
    prenom ? : string;
    email ? : string;
    mdp ? : string;
    sexe ? : string;
    date_naissance ? : any;
    role ? : string;
    creation ? : string;
    modification ? : string;
    abonnement ? : string;
    attributInsert ? : Array < string > ;
    save(): Promise < number > ;
}