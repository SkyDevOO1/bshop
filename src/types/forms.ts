export interface FormType {
  errors: any;
  register: any;
  // setValue: any;
  handleSubmit: any;
  control?: any;
  // setError: any;
  // reset: any;
  onSubmit: any;
  isLoading: boolean;
}

export interface LoginFormFieldType {
  email: string;
  password: string;
}
export interface registerFormFieldType {
  email: string;
  password: string;
  phoneNumeber: string;
}
