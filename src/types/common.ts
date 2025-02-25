export type AuthState = {
  auth: {
    error?: string;
    loading: boolean;
    token: string;
    user: {
      companyAddress: string;
      companyCity: string;
      companyDistrict: string;
      companyNIPC: string;
      companyName: string;
      companyPhone: string;
      companyPostalCode: string;
      id: string;
      marketingConsent: boolean;
      termsAccepted: boolean;
      userEmail: string;
      userName: string;
      userPassword: string;
      userRepeatPassword: string;
    };
  };
};
