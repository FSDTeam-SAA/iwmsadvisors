export interface IConsultant {
  _id: string;
  title: string;
  description: string;
  btnName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IConsultantResponse {
  status: boolean;
  message: string;
  data: IConsultant[];
}
