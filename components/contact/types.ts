export type ContactDetails = {
  email: string;
  name: string;
  message: string;
};

export enum RequestStatus {
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
}
