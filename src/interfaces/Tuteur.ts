import { UtilisateurInterfaces } from './Utilisateur';

export interface TuteurInterfaces extends UtilisateurInterfaces {
    
    utilisateur_id_utilisateur: number | null | undefined;
    id_tuteur: number;
    save(): Promise < number >
}