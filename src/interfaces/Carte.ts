export interface CarteInterfaces {
  utilisateur_id_utilisateur: number | null | undefined;
  id_carte: number;
  numero_carte: string;
  mois: string;
  annee: string;
  defaut: string;
  save(): Promise<number>;
}
