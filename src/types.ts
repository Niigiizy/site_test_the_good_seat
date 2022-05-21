/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export interface ConnectedState {
  authInfo: any;
  providerRide: any;
  offersByPartner: any;
}

export interface ConnexionState {
  email: string;
  password: string;
  messageErreur: string;
}

export interface SignUpState {
  email: string;
  password: string;
  confirmPassword: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  messageErreur: string;
}
