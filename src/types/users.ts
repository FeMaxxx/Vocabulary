export interface usersState {
  users: any[];
  loading: boolean;
  error: boolean;
  follow: string[];
}

export interface User {
  id: string;
  user: string;
  avatar: string;
  followers: number;
  tweets: number;
}
