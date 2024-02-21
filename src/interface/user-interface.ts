export interface UserInterface {
  uid: number;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  userDocument?: userDocument;
  // userShoppingCart: shoppingCartType
}

export interface userDocument {
  uid: number;
  email: string;
  phoneNumber: string;
  creation_date: string;
}
