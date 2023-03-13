export interface Contract {
  id: number;
  startDate: Date;
  endDate: Date;
  deposit: number;
  employee: string;
  customer: string;
  facility: string;
  totalCost: number;
  attachFacility: string;
}
