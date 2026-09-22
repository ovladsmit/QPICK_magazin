export interface CheckoutState {
  name: string;
  phone: string;
  address: string;
  status: 'idle' | 'success'
}