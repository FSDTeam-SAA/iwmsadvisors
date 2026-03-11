export interface IStrength {
  _id: string;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IStrengthResponse {
  status: boolean;
  message: string;
  data: IStrength[];
}
