export enum Status {
  AVAILABLE= 'available',
  PENDING= 'pending',
  SOLD= 'sold',
}

export interface PhoneModel {
  id: number;
  img?: string;
  name: string;
  price: number;
  status: Status;
}
