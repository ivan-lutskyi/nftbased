export interface registerDto {
  firstName: string;
  username: string;
  phoneNumber: string;
  country: string;
  lastName: string;
  password: string;
  email: string;
  address: string;
}
export interface register1stepDto {
  firstName: string;
  lastName: string;
  email: string;
}
export interface register2stepDto {
  id: string;
  phoneNumber: string;
  country: string;
}
export interface register3stepDto {
  userId: string | null;
  paymentMethod: 'differentWalletAddresses' | 'walletAddressPayedFrom';
  paymentData: {
    walletAddress: string;
    walletAddressPayedFrom?: string;
  };
}
