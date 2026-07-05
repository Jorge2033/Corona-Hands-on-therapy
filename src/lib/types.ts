export interface ContactFormPayload {
  fullName: string;
  phone: string;
  email?: string;
  caseType: string;
  serviceNeeded?: string;
  notes?: string;
}

export interface ContactApiResponse {
  ok: boolean;
  error?: string;
}
