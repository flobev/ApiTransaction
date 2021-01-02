export interface UserInterfaces {
  idFacture?: number;
  idStripe?: number;
  datePayment?: any;
  montantHT?: number;
  montantTTC?: string;
  source?: string;
  createdAt?: any;
  updateAt?: any;
  stripeIdStripe?: number;
  save(): Promise<number>;
}
