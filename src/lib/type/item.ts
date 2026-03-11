export interface IItem {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IItemResponse {
  status: boolean;
  message: string;
  data: IItem[];
}
