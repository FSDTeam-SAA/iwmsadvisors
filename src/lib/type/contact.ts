export interface IContactInformation {
  _id: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  mapUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IContactInformationResponse {
  status: boolean;
  message: string;
  data: IContactInformation;
}
