import { UtilisateurInterfaces } from './Utilisateur';

export interface TuteurInterfaces extends UtilisateurInterfaces {
    
    personne_idpersonne: number | null | undefined;
    id_tuteur: number;
    save(): Promise < number >
}