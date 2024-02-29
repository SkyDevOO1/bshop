export interface UserInterface {
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  userDocument?: userDocument;
}

export interface userDocument {
  uid: string;
  email: string;
  phoneNumber: string;
  creation_date: string;
}
