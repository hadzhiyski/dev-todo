export interface ITodo {
  id: number;
  title: string;
  description: string;
  createdOn: Date;
  author: ITodoAuthor;
}

export interface ITodoAuthor {
  id: number;
  username: string;
}
