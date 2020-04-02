export interface ITodoResponse {
  id: number;
  title: string;
  description: string;
  createdOn: Date;
  author: ITodoAuthorResponse;
}

export interface ITodoAuthorResponse {
  id: number;
  username: string;
}
