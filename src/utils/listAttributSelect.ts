export type listeTables =
  | "carte"
  | "creer"
  | "enfant"
  | "facture"
  | "musique"
  | "stripe"
  | "tuteur"
  | "utilisateur";

interface attributSelectInterface {
  primaryKey: string;
  attribut: Array<string>;
}

/**
 *
 * List of the property retrieved for the Select method
 * @readonly
 * @type {Array < string >}
 */
const listAttributSelect: Record<listeTables, attributSelectInterface> = {
  //Constructs a type with a set of properties Keys of type Type. This utility can be used to map the properties of a type to another type.
  utilisateur: {
    primaryKey: `id_utilisateur`,
    attribut: [
      `id_utilisateur`,
      `nom`,
      `prenom`,
      `email`,
      `mdp`,
      `sexe`,
      `date_naissance`,
      `role`,
      `creation`,
      `modification`,
      `abonnement`,
    ],
  },
  enfant: {
    primaryKey: `personne_idpersonne`,
    attribut: [`id_enfant`, `personne_idpersonne`],
  },
  tuteur: {
    primaryKey: `personne_idpersonne`,
    attribut: [`id_tuteur`, `personne_idpersonne`],
  },
  creer: {
    primaryKey: `id_tuteur id_enfant`,
    attribut: [`id_tuteur`, `id_enfant`],
  },
  musique: {
    primaryKey: `id_musique`,
    attribut: [
      `nom`,
      `lien`,
      `couverture`,
      `temps`,
      `creation`,
      `modification`,
      `type`,
      `personne_idpersonne`,
    ],
  },
  carte: {
    primaryKey: `id_carte`,
    attribut: [
      `numero_carte`,
      `mois`,
      `annee`,
      `defaut`,
      `personne_idpersonne`,
    ],
  },
  stripe: {
    primaryKey: `id_stripe`,
    attribut: [`id_carte`],
  },
  facture: {
    primaryKey: `id_facture`,
    attribut: [
      `date_facture`,
      `montant_ht`,
      `montant_ttc`,
      `source`,
      `creation`,
      `ville`,
      `modification`,
      `id_stripe`,
    ],
  },
};

// export default { listAttributSelect, listeTables };
export default listAttributSelect;
